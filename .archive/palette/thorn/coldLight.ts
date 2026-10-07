import { Badge } from "../../types/badge";
import { ThemeBasePalette } from "../../types/themeBasePalette";
import Color = require("color");

// Implementation of https://github.com/jpwol/thorn.nvim/tree/main

const ThornColdLightTheme: ThemeBasePalette = {
  fg: Color("#3C6746"),
  grey: Color("#444E52"),
  red: Color("#971015"),
  orange: Color("#BF442B"),
  yellow: Color("#BF7021"),
  green: Color("#5E800E"),
  aqua: Color("#07790B"),
  blue: Color("#4F8FA1"),
  purple: Color("#913069"),
  magenta: Color("#913069"),
  bg: Color("#C9E4D4"),
  badge: Badge.Green
};

export { ThornColdLightTheme };
