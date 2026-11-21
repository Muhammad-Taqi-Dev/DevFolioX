import { ImageResponse } from "next/og";

// Home-screen icon for iOS. Same monogram as app/icon.tsx, larger canvas.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          color: "#ECEAE3",
          fontSize: 84,
          fontFamily: "serif",
          letterSpacing: "-0.04em",
          borderBottom: "10px solid #E2A85A",
        }}
      >
        TH
      </div>
    ),
    size
  );
}
