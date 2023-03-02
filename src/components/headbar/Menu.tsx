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
  subItems?: MenuListSubItem[]
}

const menuList: MenuListItem[] = [
  {
    title: '首页',
    url: '/'
  },
  {
    title: '分部介绍',
    subItems: [
      {
        title: 'SFP',
        url: '/department/sfp'
      }
    ]
  }
]


export default function Menu() {
  return (
    <Box
      display={['none', 'none', 'none', 'flex']}
      sx={{
        flexDirection: 'row',
        alignItems: 'center',
      }}

    >
      {menuList.map((listItem) => {
        return (
          <Box key={listItem.url}>
            <span>{listItem.title}</span>
          </Box>
        )
      })}
    </Box>
  )
}