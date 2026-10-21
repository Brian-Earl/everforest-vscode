import { Accent } from "../../types/badge";
import { ThemeBasePalette } from "../../types/themeBasePalette";
import Color = require("color");

// Modified version of the Summer variant of https://github.com/everviolet/nvim

export const PetroglyphMorningTheme: ThemeBasePalette = {
  fg: Color("#444136"),
  grey: Color("#576869"),
  red: Color("#c58687"),
  orange: Color("#c69883"),
  yellow: Color("#c4aa80"),
  green: Color("#91a77a"),
  aqua: Color("#74a48b"),
  blue: Color("#8294ad"),
  purple: Color("#a897b8"),
  magenta: Color("#c499b8"),
  bg: Color("#f5efe6"),
  accent: Accent.Green
};