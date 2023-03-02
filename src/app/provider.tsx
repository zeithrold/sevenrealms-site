'use client'

import { ThemeProvider } from "@primer/react"

export default function Provider({ children }: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      { children }
    </ThemeProvider>
  )
}
