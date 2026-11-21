"use client";

import { useEffect, useRef, useState } from "react";
import SectionWrapper from "../SectionWrapper";
import SectionHeader from "../SectionHeader";
import { site } from "@/lib/site";

const inputClass =
  "w-full rounded-md border border-line bg-surface px-3.5 py-2.5 text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none transition-colors";
const labelClass = "mb-1.5 block text-sm text-ink-soft";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "", // honeypot: hidden from people, bots fill it in
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (copyTimer.current) clearTimeout(copyTimer.current);
    };
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      if (copyTimer.current) clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (insecure context / denied) — the mailto link still works.
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "", website: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        const data = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        setErrorMessage(data?.error ?? "");
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeader
        label="Contact"
        title="Get in touch"
        intro="Questions about my work, or something you'd like to talk through? Send me a message."
      />

      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        {/* ── Left: direct contact ─────────────────────────────────────── */}
        <div>
          <p className="font-mono text-sm text-ink-muted">Email</p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="link break-all font-display text-2xl text-ink"
            >
              {site.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              aria-label="Copy email address"
              className="rounded-md border border-line px-2.5 py-1 text-sm text-ink-muted transition-colors hover:border-line-strong hover:text-ink"
            >
              {copied ? "Copied" : "Copy"}
            </button>
            <span className="sr-only" aria-live="polite">
              {copied ? "Email address copied to clipboard" : ""}
            </span>
          </div>

          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="font-mono text-ink-muted">Phone</dt>
              <dd className="mt-0.5">
                <a href={site.phoneHref} className="link">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-ink-muted">Location</dt>
              <dd className="mt-0.5 text-ink">Karachi, Pakistan</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <a className="link" href={site.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
            <a className="link" href={site.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
            <a className="link" href={site.resume} target="_blank" rel="noopener noreferrer">
              Resume ↗
            </a>
          </div>
        </div>

        {/* ── Right: form ──────────────────────────────────────────────── */}
        <form onSubmit={handleSubmit} className="relative space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClass}>
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
                placeholder="Jane Smith"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                placeholder="jane@company.com"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className={labelClass}>
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Project discussion"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="message" className={labelClass}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="What would you like to talk about?"
              className={`${inputClass} resize-y`}
            />
          </div>

          {/* Honeypot field: off-screen, skipped by keyboard and screen readers */}
          <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
            <label htmlFor="website">Website</label>
            <input
              type="text"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-md bg-accent px-5 py-2.5 font-medium text-canvas transition-colors hover:bg-accent-hover disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>

            <p aria-live="polite" className="text-sm text-ink">
              {status === "success" && "Thanks, your message is on its way. I'll reply by email."}
              {status === "error" && (
                <>
                  <span className="mr-2 text-accent" aria-hidden="true">
                    !
                  </span>
                  {errorMessage ||
                    "Something went wrong. Please try again, or email me directly."}
                </>
              )}
            </p>
          </div>
        </form>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
