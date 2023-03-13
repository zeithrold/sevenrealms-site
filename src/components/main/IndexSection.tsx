"use client";

import React from "react";

import { Box } from "@primer/react";
import { BetterSystemStyleObject } from "@primer/react/lib/sx";

interface IndexSectionProps {
  children: React.ReactNode;
  sx?: BetterSystemStyleObject;
}

export default function IndexSection({ children, sx }: IndexSectionProps) {
  return (
    <Box
      sx={Object.assign(sx || {}, {
        height: "100vh",
        padding: "12px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        scrollSnapAlign: "start",
      })}
    >
      {children}
    </Box>
  );
}
