import { Badge } from "../../types/badge";
import { ThemeBasePalette } from "../../types/themeBasePalette";
import Color = require("color");

// Implementation of https://github.com/jpwol/thorn.nvim/tree/main

const ThornWarmDarkTheme: ThemeBasePalette = {
  fg: Color("#DBD0C6"),
  grey: Color("#91A4AD"),
  red: Color("#FF5B61"),
  orange: Color("#F9ADA0"),
  yellow: Color("#FFD7AA"), // ALT: #F7B982
  green: Color("#9DC6A9"),
  aqua: Color("#79C2B6"),
  blue: Color("#86BFD2"),
  purple: Color("#D59CCE"),
  magenta: Color("#D59CCE"),
  bg: Color("#152326"),
  badge: Badge.Green
};

export { ThornWarmDarkTheme };
