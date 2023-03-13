"use client";

import React from "react";

import { Box } from "@primer/react";

import DetailSection from "./sections/detail/DetailSection";
import HomeSection from "./sections/home/HomeSection";

export default function IndexPage() {
  return (
    <Box>
      <HomeSection />
      <DetailSection />
    </Box>
  );
}
