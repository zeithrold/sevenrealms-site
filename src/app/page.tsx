import "./style.css";

import Head from "next/head";
import Image from "next/image";

import IndexPage from "@/components/main/IndexPage";
import { Box } from "@primer/react";

import type { Metadata } from "next";
export default function Home() {
  return <IndexPage />;
}

export const metadata = {
  title: "七域动漫协会 - 一个动漫爱好者的家",
};
