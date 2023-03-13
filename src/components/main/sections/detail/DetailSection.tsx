/* eslint-disable @next/next/no-img-element */
import Title from "./Title";
import React from "react";
import IndexSection from "../../IndexSection";
import { Box } from "@primer/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import imageLoader from "@/lib/imageLoader";
import triangle1 from '$public/assets/background/triangle1.svg'


const fileList = [
  "COS部集体照.jpg",
  "SFP集体照.jpg",
  "宅舞部集体照.jpg",
  "轻音部集体照.jpg",
];

export default function DetailSection() {
  return (
    <IndexSection
      sx={{
        backgroundImage: 'url("/assets/background/triangle1.svg")',
        // backgroundImage: "/favicon.ico",
        backgroundPosition: 'top left',
        backgroundRepeat: 'no-repeat',
        backgroundSize: "850px auto"
      }}
    >
      <Box>
        <Title />
        <h3 style={{textAlign: 'center', marginTop: '8px'}}>七域拥有着无限的可能<br />已经为你准备好舞台</h3>
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
