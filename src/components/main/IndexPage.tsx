"use client";

import React from "react";
import { Box } from "@primer/react";
import IndexSection from "./IndexSection";
import HomeSection from "./sections/home/HomeSection";
import DetailSection from "./sections/detail/DetailSection";
import { BetterSystemStyleObject } from "@primer/react/lib/sx";

export default function IndexPage() {
  return (
    <Box>
      <HomeSection />
      <DetailSection />
    </Box>
  );
}
