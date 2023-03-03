'use client'

import { Box, Heading } from '@primer/react'
import React from 'react'
import MenuSection from './MenuSection'

export default function MenuBar() {
  return (
    <Box
      sx={{
        display: 'flex',
      }}
      padding={['10px 6px', '12px']}
      justifyContent={['center', 'space-between']}
    >
      <Box letterSpacing={['12px', '0px']}>
        <Heading sx={{
          fontSize: ["1.5em", "2em"]
        }}>
          七域动漫协会
        </Heading>
      </Box>
      <MenuSection />
    </Box>
  )
}
