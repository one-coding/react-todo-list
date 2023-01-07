import React from "react";
import DarkModeButton from "./DarkModeButton";
import Logo from "./Logo";
import Nav from "./Nav";
import styled from "./TodoHeader.module.css";

export default function Header({ navList }) {
  return (
    <header className={styled.header}>
      <div className={styled.logoContainer}>
        <Logo />
        <DarkModeButton />
      </div>
      <div>
        <Nav navList={navList} />
      </div>
    </header>
  );
}
