import React from "react";
import styled from "./TodoHeader.module.css";

export default function Nav({ navList }) {
  return (
    <nav>
      <ul>
        {navList.map((nav) => (
          <li className={nav.isSelected && styled.selected}>{nav.title}</li>
        ))}
      </ul>
    </nav>
  );
}
