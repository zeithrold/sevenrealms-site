"use client";

import { Noto_Sans_SC } from "next/font/google";

import { Box, ThemeProvider } from "@primer/react";

const notoSans = Noto_Sans_SC({
  weight: ["700", "900", "500"],
  subsets: ["latin"],
});

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Box className={notoSans.className}>{children}</Box>
    </ThemeProvider>
  );
}
