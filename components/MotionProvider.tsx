"use client";

import { MotionConfig } from "framer-motion";

/** Makes every framer-motion animation respect prefers-reduced-motion. */
const MotionProvider = ({ children }: { children: React.ReactNode }) => (
  <MotionConfig reducedMotion="user">{children}</MotionConfig>
);

export default MotionProvider;
