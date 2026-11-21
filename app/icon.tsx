import { ImageResponse } from "next/og";

// "TH" monogram favicon in the site palette (replaces the create-next-app icon).
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0F0F0E",
          borderRadius: 14,
          border: "3px solid #E2A85A",
          color: "#ECEAE3",
          fontSize: 30,
          fontFamily: "serif",
          letterSpacing: "-0.04em",
        }}
      >
        TH
      </div>
    ),
    size
  );
}
