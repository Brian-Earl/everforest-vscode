import { Badge } from "../../types/badge";
import { ThemeBasePalette } from "../../types/themeBasePalette";
import Color = require("color");

// Implementation of https://github.com/everviolet/nvim

const EvergardenLunarTheme: ThemeBasePalette = {
  fg: Color("#F7F1E6"),
  grey: Color("#B4C0DB"),
  red: Color("#F57F82"),
  orange: Color("#F5A58D"),
  yellow: Color("#F7DDAF"),
  green: Color("#C5D9B5"),
  aqua: Color("#ACD1B6"),  
  blue: Color("#99B3D5"),
  purple: Color("#A69FD5"),
  magenta: Color("#D6ABC3"),
  bg: Color("#1C1D29"),
  badge: Badge.Blue
};

export { EvergardenLunarTheme };
