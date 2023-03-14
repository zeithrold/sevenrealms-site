"use client";

import React from "react";

import { color } from "@/constants";
import { Box } from "@primer/react";

export default function HeadBar() {
  return (
    <Box
      sx={{
        // width: '100%',
        backgroundColor: color.SEVENREALMS_PRIMARY,
        padding: "8px",
      }}
    >
      <span
        style={{
          color: "black",
          fontWeight: "bold",
        }}
      >
        SevenRealms 网站群
      </span>
    </Box>
  );
}
