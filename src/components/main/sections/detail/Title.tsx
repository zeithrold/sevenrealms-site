import React from "react";
import { Box, Heading } from "@primer/react";
import RollingAbilities from "./RollingAbilities";


export default function Title() {
  return (
    <Box
      fontSize="2em"
      fontWeight="bold"
      textAlign="center"
    >在七域，你可以<RollingAbilities /></Box>
  )
}
