"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import React from "react";

import { color } from "@/constants";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "10px",
        transformOrigin: "0%",
        scaleX: scaleX,
        backgroundColor: color.SEVENREALMS_PRIMARY,
        zIndex: 100,
      }}
    />
  );
}
