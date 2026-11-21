import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

// 1200×630 preview card shown when the link is shared on LinkedIn,
// WhatsApp, Slack, X, etc. Uses the planned warm-dark palette.
export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0F0F0E",
          color: "#ECEAE3",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#97948A",
            letterSpacing: "0.04em",
          }}
        >
          dev-folio-x.vercel.app
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 38,
              color: "#E2A85A",
            }}
          >
            {site.role}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 30,
              color: "#B9B6AC",
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            APIs, auth and dashboards with NestJS, .NET and Next.js.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#97948A",
            borderTop: "1px solid #2A2925",
            paddingTop: 28,
          }}
        >
          {`${site.jobTitle} at ${site.employer} · ${site.location.city}`}
        </div>
      </div>
    ),
    size
  );
}
