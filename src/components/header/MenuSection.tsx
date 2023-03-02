'use client'

import { Box } from "@primer/react";
import React from "react";

interface MenuListSubItem {
  title: string;
  url: string;
}

interface MenuListItem {
  title: string;
  url?: string;
  subSections?: MenuListSubItem[]
}

const sections: MenuListItem[] = [
  {
    title: '首页',
    url: '/'
  },
  {
    title: '分部介绍',
    subSections: [
      {
        title: 'SFP',
        url: '/department/sfp'
      }
    ]
  }
]


export default function MenuSection() {
  return (
    <Box
      display={['none', 'flex']}
      sx={{
        flexDirection: 'row',
        alignItems: 'center',
      }}

    >
      {sections.map((sectionItem) => {
        return (
          <Box key={sectionItem.url}>
            <span>{sectionItem.title}</span>
          </Box>
        )
      })}
    </Box>
  )
}
