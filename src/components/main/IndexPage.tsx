'use client'

import React from "react"
import { Box } from "@primer/react"
import IndexSection from "./IndexSection"
import HomeSection from "./sections/HomeSection"

export default function IndexPage() {
  return (
    <>
      <HomeSection />
      <IndexSection>good</IndexSection>
      <IndexSection>good</IndexSection>
    </>
  )
}
