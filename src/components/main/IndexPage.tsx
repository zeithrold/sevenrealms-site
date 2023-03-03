'use client'

import React from "react"
import { Box } from "@primer/react"
import IndexSection from "./IndexSection"
import HomeSection from "./sections/home/HomeSection"
import DetailSection from "./sections/detail/DetailSection"

export default function IndexPage() {
  return (
    <>
      <HomeSection />
      <DetailSection />
      <IndexSection>good</IndexSection>
    </>
  )
}
