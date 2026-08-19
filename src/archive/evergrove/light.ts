import { Badge } from "../../types/badge";
import { ThemeBasePalette } from "../../types/themeBasePalette";
import Color = require("color");

// Altered version of https://github.com/haystackandroid/rusticated

export const EvermountainLightTheme: ThemeBasePalette = {
  fg: Color("#444136"),
  grey: Color("#5f5a4c"),
  red: Color("#834742"),
  orange: Color("#7d491b"),
  yellow: Color("#645826"),
  green: Color("#4b5e26"),
  aqua: Color("#106659"),
  blue: Color("#3c5a89"),
  purple: Color("#605188"),
  magenta: Color("#784872"),
  bg: Color("#d3d2ce"),
  badge: Badge.Yellow
};