import { ImageResponse } from "next/og";

// Shared 1200×630 Open Graph card in the site palette.
export const ogSize = { width: 1200, height: 630 };

export function renderOgCard({
  eyebrow,
  title,
  accentLine,
  body,
  footer,
}: {
  eyebrow: string;
  title: string;
  accentLine?: string;
  body?: string;
  footer: string;
}) {
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
        <div style={{ display: "flex", fontSize: 26, color: "#97948A", letterSpacing: "0.04em" }}>
          {eyebrow}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, letterSpacing: "-0.03em", lineHeight: 1.05 }}>{title}</div>
          {accentLine && (
            <div style={{ display: "flex", marginTop: 24, fontSize: 38, color: "#E2A85A" }}>
              {accentLine}
            </div>
          )}
          {body && (
            <div
              style={{
                display: "flex",
                marginTop: 28,
                fontSize: 30,
                color: "#B9B6AC",
                maxWidth: 1000,
                lineHeight: 1.4,
              }}
            >
              {body}
            </div>
          )}
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
          {footer}
        </div>
      </div>
    ),
    ogSize
  );
}
