import { Badge } from "../../types/badge";
import { ThemeBasePalette } from "../../types/themeBasePalette";
import Color = require("color");

// Implementation of https://github.com/abreujp/scholar.nvim

export const ScholarLightTheme: ThemeBasePalette = {
  fg: Color("#452A25"),
  grey: Color("#A68663"),
  red: Color("#6B4230"),
  orange: Color("#6B4230"),
  yellow: Color("#82643C"),
  green: Color("#644E37"),
  aqua: Color("#624E38"),  
  blue: Color("#5A462E"),
  purple: Color("#73462A"),
  magenta: Color("#73462A"),
  bg: Color("#EEDCC4"), // #F0DEC6
  badge: Badge.Green
};