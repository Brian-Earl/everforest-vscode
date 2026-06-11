import { Badge } from "../../types/badge";
import { ThemeBasePalette } from "../../types/themeBasePalette";
import Color = require("color");

// Implementation of https://github.com/abreujp/scholar.nvim

export const ScholarDarkTheme: ThemeBasePalette = {
  fg: Color("#E6D0BC"),
  grey: Color("#C6A683"),
  red: Color("#E8A080"),
  orange: Color("#E8A080"),
  yellow: Color("#F4B78A"),
  green: Color("#C5AA7F"),
  aqua: Color("#CAAD8F"),  
  blue: Color("#BAAA8C"),
  purple: Color("#D8A27A"),
  magenta: Color("#D8A27A"),
  bg: Color("#221B18"), // #1F1815
  badge: Badge.Green
};