'use client'

import { Box, Heading } from '@primer/react'
import React from 'react'
import Menu from './Menu'

export default function HeadBar() {
  return (
    <Box
      // width="100%"
      sx={{
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <Box>
        <Heading>SevenField</Heading>
      </Box>
      <Menu />
    </Box>
  )
}
