import React from "react";
import { Box } from "@primer/react";
import IndexSection from "../IndexSection";
import ACGManiaText from "./home/ACGManiaText";

export default function HomeSection() {
  return (
    <IndexSection>
      <Box
        fontSize={["3em", "4em"]}
        fontWeight="bold"
        // sx={{
        //   flexDirection: 'column'
        // }}
      >
        一个{<ACGManiaText />}的家
      </Box>
    </IndexSection>
  )
}