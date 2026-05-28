import { Badge } from "../../types/badge";
import { ThemeBasePalette } from "../../types/themeBasePalette";
import Color = require("color");

// Implementation of https://github.com/everviolet/nvim

export const EvergardenWinterTheme: ThemeBasePalette = {
  fg: Color("#F8F9E8"),
  grey: Color("#96B4AA"),
  red: Color("#F57F82"),
  orange: Color("#F7A182"),
  yellow: Color("#F5D098"),
  green: Color("#CBE3B3"),
  aqua: Color("#B3E3CA"),  
  blue: Color("#B2CAED"),
  purple: Color("#D2BDF3"),
  magenta: Color("#F3C0E5"),
  bg: Color("#1E2528"),
  badge: Badge.Green
};