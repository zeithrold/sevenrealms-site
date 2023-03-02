'use client'

import React from 'react'
import { Box } from '@primer/react'
import { color } from '@/constants'

export default function SevenFieldHeadBar() {
  return (
    <Box
      sx={{
        // width: '100%',
        backgroundColor: color.SEVENFIELD_PRIMARY,
        padding: '8px'
      }}
    >
      <span
        style={{
          color: 'black',
          fontWeight: 'bold'
        }}
      >SevenField 网站群</span>
    </Box>
  )
}
