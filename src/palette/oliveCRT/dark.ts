import { Badge } from "../../types/badge";
import { ThemeBasePalette } from "../../types/themeBasePalette";
import Color = require("color");

// Implementation of https://github.com/reobin/olive-crt.nvim

export const OliveCRTDarkTheme: ThemeBasePalette = {
  fg: Color("#fbfcf6"),
  grey: Color("#c0c7b7"),
  red: Color("#ea938b"),
  orange: Color("#f7c775"), // ALT: #f5a764
  yellow: Color("#fbe09f"),
  green: Color("#ecf6ae"), // ALT: #bccd80
  aqua: Color("#a5d6cb"),  
  blue: Color("#90dde4"),
  purple: Color("#dac3ed"),
  magenta: Color("#dac3ed"),
  bg: Color("#171a15"),
  badge: Badge.Green
};