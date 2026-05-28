import { Badge } from "../../types/badge";
import { ThemeBasePalette } from "../../types/themeBasePalette";
import Color = require("color");

// Implementation of https://github.com/everviolet/nvim

export const EvergardenSummerTheme: ThemeBasePalette = {
  fg: Color("#2B3034"),
  grey: Color("#576869"),
  red: Color("#C58687"),
  orange: Color("#C69883"),
  yellow: Color("#C4AA80"),
  green: Color("#91A77A"),
  aqua: Color("#74A48B"),
  blue: Color("#8294AD"),
  purple: Color("#A897B8"),
  magenta: Color("#C499B8"),
  bg: Color("#F5EFE6"),
  badge: Badge.Green
};