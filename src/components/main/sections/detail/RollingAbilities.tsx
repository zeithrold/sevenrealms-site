"use client";

import { motion, useAnimationControls } from "framer-motion";
import React from "react";
import { useInterval } from "usehooks-ts";

import { Box } from "@primer/react";

const abilities = [
  "畅聊ACG",
  "打WOTA艺",
  "Rock",
  "Cosplay",
  "跳一支舞",
  "成为偶像出道",
  "搭建神经网络",
  "做你想做的",
];

export default function RollingAbilities() {
  const controls = useAnimationControls();
  const [upperIndex, setUpperIndex] = React.useState(0);
  const [lowerIndex, setLowerIndex] = React.useState(1);
  useInterval(() => {
    controls
      .start({
        y: "-50%",
        transition: {
          ease: "easeOut",
          duration: 0.75,
        },
      })
      .then(() => {
        setUpperIndex((upperIndex + 1) % abilities.length);
        return controls.start({
          y: 0,
          transition: {
            duration: 0,
          },
        });
      })
      .then(() => {
        setLowerIndex((lowerIndex + 1) % abilities.length);
      });
  }, 3000);
  return (
    <Box height="1.5em" fontSize="1.75em" overflowY="hidden" fontWeight="900">
      <motion.div
        style={{
          position: "relative",
          textAlign: "center",
          fontWeight: "900",
        }}
        animate={controls}
        initial="default"
      >
        <span>{abilities[upperIndex]}</span>
        <br />
        <span>{abilities[lowerIndex]}</span>
      </motion.div>
    </Box>
  );
}
