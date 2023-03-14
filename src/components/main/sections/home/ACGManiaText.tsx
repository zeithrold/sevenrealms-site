import { motion } from "framer-motion";
import React from "react";

import { color } from "@/constants";

export default function ACGManiaText() {
  return (
    <motion.div
      style={{
        background: `linear-gradient(to right, ${color.SEVENREALMS_PRIMARY} var(--label-range), rgba(255,255,255,0) var(--label-range))`,
      }}
      transition={{
        delay: 1,
        type: "spring",
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
        duration: 1,
      }}
      initial={{ "--label-range": "0%" } as any}
      animate={{ "--label-range": "100%" } as any}
    >
      动漫爱好者
    </motion.div>
  );
}
