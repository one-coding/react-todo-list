import React, { useState } from "react";
import styled from "./ListInput.module.css";

export default function ListInput({ onInput }) {
  const [text, setText] = useState("");
  return (
    <div className={styled.container}>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onInput(e.target.value);
            setText("");
          }
        }}
      />

      <button
        onClick={() => {
          onInput(text);
          setText("");
        }}
      >
        추가
      </button>
    </div>
  );
}
