import { Badge } from "../../types/badge";
import { ThemeBasePalette } from "../../types/themeBasePalette";
import Color = require("color");

// Combination of https://github.com/sainnhe/everforest and https://github.com/leobeosab/tearout.nvim

export const EvermountainDarkTheme: ThemeBasePalette = {
  fg: Color("#e6e0c9"),
  grey: Color("#8d8d77"),
  red: Color("#fc796b"),
  orange: Color("#ed9c6a"),
  yellow: Color("#edc074"),
  green: Color("#a8cb79"),
  aqua: Color("#83c092"),
  blue: Color("#7fbbb3"),
  purple: Color("#d699b6"),
  magenta: Color("#d699b6"),
  bg: Color("#34392d"),
  badge: Badge.Green
};