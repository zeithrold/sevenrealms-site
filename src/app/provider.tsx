'use client'

import { Box, ThemeProvider } from "@primer/react"
import { Noto_Sans_SC } from "next/font/google"

const notoSans = Noto_Sans_SC({
  weight: ["400", "700", "100", "300", "900", "500"],
  subsets: ["latin"]
})

export default function Provider({ children }: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <Box className={notoSans.className}>
        { children }
      </Box>
    </ThemeProvider>
  )
}
