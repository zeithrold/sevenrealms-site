/* eslint-disable @next/next/no-img-element */
import Title from "./Title";
import React from "react";
import IndexSection from "../../IndexSection";
import { Box } from "@primer/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import imageLoader from "@/lib/imageLoader";

const fileList = [
  "COS部集体照.jpg",
  "SFP集体照.jpg",
  "宅舞部集体照.jpg",
  "轻音部集体照.jpg",
];

export default function DetailSection() {
  return (
    <IndexSection>
      <Box>
        <Title />
        <h2 style={{textAlign: 'center'}}>七域拥有着无限的可能，已经为你准备好舞台。</h2>
        <Box maxWidth={["100%", "100%", "600px", "600px"]} 
          overflowY="hidden"
        alignContent="center" display="flex">
          <Carousel
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            interval={3000}
            showStatus={false}
          >
            {
              fileList.map(fileName => {
                return (
                  <Box key={fileName}>
                    <img src={imageLoader({src: `carousel/${fileName}`})} alt="" />
                  </Box>
                )
              })
            }
          </Carousel>
        </Box>
      </Box>
    </IndexSection>
  );
}
