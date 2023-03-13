import React from "react";
import { Box } from "@primer/react";
import IndexSection from "../../IndexSection";
import ACGManiaText from "./ACGManiaText";


export default function HomeSection() {
  return (
    <IndexSection
      sx={{
        backgroundImage: 'url("/assets/background/triangle2.svg")',
        // backgroundImage: "/favicon.ico",
        backgroundPosition: "top right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "700px auto",
      }}
    >
      <Box
        fontSize={["3em", "4em"]}
        fontWeight="700"
      >
        一个{<ACGManiaText />}的家
      </Box>
    </IndexSection>
  );
}
