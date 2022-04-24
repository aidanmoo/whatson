import "./ThemeSelector.css";

import { useTheme } from "../hooks/useTheme";

import React from "react";

import modeIcon from "../assets/mode-icon.svg";

export default function ThemeSelector() {
  const { changeMode, mode } = useTheme();
  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };
  console.log(mode);
  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          onClick={toggleMode}
          src={modeIcon}
          alt="light dark toggle"
          style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
        />
      </div>
      
    </div>
  );
}
