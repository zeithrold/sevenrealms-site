import "./style.css";

import React from "react";

import HeadBar from "./HeadBar";
import MenuBar from "./MenuBar";
import ProgressBar from "./ProgressBar";

export default function Header() {
  return (
    <header>
      <ProgressBar />
      <HeadBar />
      <MenuBar />
    </header>
  );
}
