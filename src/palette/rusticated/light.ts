import { Badge } from "../../types/badge";
import { ThemeBasePalette } from "../../types/themeBasePalette";
import Color = require("color");

// Implementation of https://github.com/haystackandroid/rusticated

export const RusticatedTheme: ThemeBasePalette = {
  fg: Color("#444136"),
  grey: Color("#5f5a4c"),
  red: Color("#834742"),
  orange: Color("#745034"), // Made by me
  yellow: Color("#645826"),
  green: Color("#2c633f"),
  aqua: Color("#006470"),
  blue: Color("#3c5a89"),
  purple: Color("#5a517e"), // Made by me
  magenta: Color("#784872"),
  bg: Color("#d3d2ce"),
  badge: Badge.Yellow
};