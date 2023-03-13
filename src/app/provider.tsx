"use client";

import { Noto_Sans_SC } from "next/font/google";

import { Box, ThemeProvider } from "@primer/react";

const notoSans = Noto_Sans_SC({
  weight: ["700", "900", "500"],
  subsets: ["latin"],
});

export default function Provider({ children }: { children: React.ReactNode }) {
  console.log(
    "%cPowered By SevenField Engine",
    "background-color: #FFD800; font-size: 24px; font-weight: bolder; padding: 4px"
  );
  // console.log(
  //   "%c七域技术部向您发出了挑战，你愿意来参与吗？\naGVsbG93b3JsZA==",
  //   "background-color: #FFD800; padding: 4px"
  // );

  return (
    <ThemeProvider>
      <Box className={notoSans.className}>{children}</Box>
    </ThemeProvider>
  );
}
