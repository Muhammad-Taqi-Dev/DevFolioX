import { NextRequest, NextResponse } from "next/server";
import * as brevo from "@getbrevo/brevo";

// Addresses come from env so they can change without a code edit.
// Fallbacks keep the form working if the vars are not set.
const FALLBACK_ADDRESS = "taqihaider591@gmail.com";
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || FALLBACK_ADDRESS;
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || FALLBACK_ADDRESS;

const LIMITS = {
  name: { min: 1, max: 100 },
  email: { min: 3, max: 254 },
  subject: { min: 1, max: 150 },
  message: { min: 10, max: 5000 },
} as const;

const EMAIL_RE = /^[^\s@<>"'()[\]\\,;:]+@[^\s@<>"'()[\]\\,;:]+\.[A-Za-z]{2,}$/;

// ── Rate limit ───────────────────────────────────────────────────────────────
// Best-effort, in-memory, per server instance. On serverless (Vercel) each
// instance has its own map and it resets on cold start, so this only slows
// down casual abuse; use a shared store (e.g. Upstash Redis) for a hard limit.
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  // Keep the map from growing without bound.
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= RATE_WINDOW_MS)) hits.delete(key);
    }
  }
  return false;
}

function clientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function bad(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status });
}

type Field = keyof typeof LIMITS;

function readField(body: Record<string, unknown>, key: Field): string | null {
  const raw = body[key];
  if (typeof raw !== "string") return null;
  const value = raw.trim();
  const { min, max } = LIMITS[key];
  return value.length >= min && value.length <= max ? value : null;
}

function buildEmailHtml(f: Record<Field, string>): string {
  const name = escapeHtml(f.name);
  const email = escapeHtml(f.email);
  const subject = escapeHtml(f.subject);
  const message = escapeHtml(f.message);
  const replyHref = `mailto:${encodeURIComponent(f.email)}?subject=${encodeURIComponent(`Re: ${f.subject}`)}`;

  return `<!DOCTYPE html>
<html>
  <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
  <body style="margin:0;padding:24px;background:#f4f3ef;font-family:-apple-system,'Segoe UI',Roboto,Arial,sans-serif;color:#1f1e1b;">
    <div style="max-width:620px;margin:0 auto;background:#ffffff;border:1px solid #e4e2db;border-radius:10px;overflow:hidden;">
      <div style="padding:24px 28px;border-bottom:1px solid #e4e2db;">
        <p style="margin:0;font-size:13px;color:#8a877d;">Portfolio contact form</p>
        <h1 style="margin:6px 0 0;font-size:20px;font-weight:600;">${subject}</h1>
      </div>
      <div style="padding:24px 28px;">
        <table style="border-collapse:collapse;font-size:14px;margin-bottom:20px;">
          <tr><td style="padding:4px 16px 4px 0;color:#8a877d;">From</td><td style="padding:4px 0;">${name}</td></tr>
          <tr><td style="padding:4px 16px 4px 0;color:#8a877d;">Email</td><td style="padding:4px 0;">${email}</td></tr>
        </table>
        <div style="font-size:15px;line-height:1.7;white-space:pre-wrap;border-left:3px solid #e2a85a;padding:4px 0 4px 16px;">${message}</div>
        <p style="margin:28px 0 0;">
          <a href="${escapeHtml(replyHref)}" style="display:inline-block;background:#1f1e1b;color:#ffffff;text-decoration:none;padding:10px 18px;border-radius:6px;font-size:14px;">Reply to ${name}</a>
        </p>
      </div>
    </div>
  </body>
</html>`;
}

export async function POST(request: NextRequest) {
  if (isRateLimited(clientIp(request))) {
    return bad("Too many messages. Please try again later, or email me directly.", 429);
  }

  let body: Record<string, unknown>;
  try {
    const parsed: unknown = await request.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return bad("Invalid request.");
    }
    body = parsed as Record<string, unknown>;
  } catch {
    return bad("Invalid request.");
  }

  // Honeypot: real visitors never fill the hidden "website" field.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  const name = readField(body, "name");
  const email = readField(body, "email");
  const subject = readField(body, "subject");
  const message = readField(body, "message");

  if (!name || !email || !subject || !message) {
    return bad("Please fill in every field. Messages need at least 10 characters.");
  }
  if (!EMAIL_RE.test(email)) {
    return bad("Please enter a valid email address.");
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error("[contact] email provider is not configured");
    return bad("Server misconfiguration.", 500);
  }

  try {
    const api = new brevo.TransactionalEmailsApi();
    api.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, apiKey);

    const mail = new brevo.SendSmtpEmail();
    // Strip line breaks from header values to prevent header injection.
    mail.subject = `Portfolio contact: ${subject.replace(/[\r\n]+/g, " ")}`;
    mail.htmlContent = buildEmailHtml({ name, email, subject, message });
    mail.sender = { name: "Portfolio contact form", email: FROM_EMAIL };
    mail.to = [{ email: TO_EMAIL }];
    mail.replyTo = { email, name: name.replace(/[\r\n]+/g, " ") };

    await api.sendTransacEmail(mail);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    const reason = error instanceof Error ? error.message : "unknown error";
    console.error("[contact] send failed:", reason);
    return bad("Could not send your message. Please email me directly.", 500);
  }
}
