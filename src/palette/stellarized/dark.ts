import { Badge } from "../../types/badge";
import { ThemeBasePalette } from "../../types/themeBasePalette";
import Color = require("color");

// Implementation of https://github.com/haystackandroid/stellarized

export const StellarizedDarkTheme: ThemeBasePalette = {
  fg: Color("#bead9d"),
  grey: Color("#9d8875"),
  red: Color("#ca7375"),
  orange: Color("#b87e5f"), // Made for theme
  yellow: Color("#a58949"),
  green: Color("#5c9a61"),
  aqua: Color("#009ba2"),
  blue: Color("#578fcc"),
  purple: Color("#b178b5"),
  magenta: Color("#be7695"), // Made for theme
  bg: Color("#222532"),
  badge: Badge.Yellow
};