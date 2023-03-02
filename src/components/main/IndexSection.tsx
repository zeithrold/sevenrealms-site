import { Box } from '@primer/react'
import React from 'react'

interface IndexSectionProps {
  children: React.ReactNode
}

export default function IndexSection({ children }: IndexSectionProps) {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        scrollSnapAlign: 'center'
      }}
    >
      {children}
    </Box>
  )
}
