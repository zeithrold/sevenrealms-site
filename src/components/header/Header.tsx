import React from "react";
import "./style.css"
import HeadBar from "./HeadBar";
import MenuBar from "./MenuBar";


export default function Header() {
  return (
    <header>
      <HeadBar />
      <MenuBar />
    </header>
  )
}
