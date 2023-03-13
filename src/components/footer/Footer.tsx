"use client";
import { Box } from "@primer/react";
import { HeartFillIcon } from "@primer/octicons-react";
import React from "react";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <Box
      backgroundColor={"#f8f8f8"}
      paddingY={["16px", "32px"]}
      paddingX={["16px", "32px"]}
      display="flex"
      flexWrap="wrap"
      flexDirection="row"
      sx={{
        scrollSnapAlign: "end",
      }}
    >
      <Box width={[1, 1 / 2]}>
        <h4>大连理工大学七域动漫协会</h4>
        <Box
          sx={{
            color: "#808080",
          }}
        >
          <p>
            大连理工大学七域动漫协会始于1998年，是享誉大工校园的老牌明星社团。
          </p>
        </Box>
      </Box>
      <Box width={[1, 1 / 2]}>
        <h4 color="#000000">友情链接</h4>
      </Box>
      <Box
        width={1}
        display="flex"
        mt="12px"
        justifyContent="center"
        alignItems="center"
        sx={{
          color: "#808080",
          textAlign: "center",
        }}
      >
        <small>
        Copyright © {currentYear} - 大连理工大学七域动漫协会
        <br />
        Made with <HeartFillIcon size={16} /> by 技术部
        </small>
      </Box>
    </Box>
  );
}
