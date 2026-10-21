import { Accent } from "../../types/badge";
import { ThemeBasePalette } from "../../types/themeBasePalette";
import Color = require("color");

// Combination of https://github.com/sainnhe/everforest and https://github.com/everviolet/nvim (Spring)

export const PetroglyphNightTheme: ThemeBasePalette = {
  fg: Color("#e6e0c9"), // #e6e0c9
  grey: Color("#96B4AA"), // #8d8d77
  red: Color("#fc796b"),
  orange: Color("#ed9c6a"),
  yellow: Color("#edc074"),
  green: Color("#a8cb79"),
  aqua: Color("#83c092"),
  blue: Color("#7fbbb3"),
  purple: Color("#c29fd2"),
  magenta: Color("#d699b6"),
  bg: Color("#2b3438"), // #34392d
  accent: Accent.Green
};