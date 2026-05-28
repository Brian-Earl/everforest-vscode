import { Badge } from "../../types/badge";
import { ThemeBasePalette } from "../../types/themeBasePalette";
import Color = require("color");

// Implementation of https://github.com/reobin/olive-crt.nvim

export const OliveCRTDarkTheme: ThemeBasePalette = {
  fg: Color("#fbfcf6"),
  grey: Color("#c0c7b7"),
  red: Color("#ea938b"),
  orange: Color("#f5a764"), // ALT: #f7c775
  yellow: Color("#fbe09f"),
  green: Color("#bccd80"), // ALT: #ecf6ae
  aqua: Color("#a5d6cb"),  
  blue: Color("#90dde4"),
  purple: Color("#dac3ed"),
  magenta: Color("#dac3ed"),
  bg: Color("#171a15"),
  badge: Badge.Green
};