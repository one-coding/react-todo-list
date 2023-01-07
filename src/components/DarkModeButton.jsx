import React, { useState } from "react";

import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import styled from "./DarkModeButon.module.css";

export default function DarkModeButton() {
  const [isDark, setIsDark] = useState(false);
  return (
    <button
      className={`${styled.button} ${isDark && styled.darkButton}`}
      onClick={() => {
        setIsDark((prev) => !prev);
      }}
    >
      {isDark ? <BsFillMoonFill /> : <BsFillSunFill />}
    </button>
  );
}
