import { Badge } from "../../types/badge";
import { ThemeBasePalette } from "../../types/themeBasePalette";
import Color = require("color");

// Inspired by https://github.com/benbusby/colorstorm

const FogTheme: ThemeBasePalette = {
  fg: Color("#101820"),
  grey: Color("#4E4B48"),
  red: Color("#7D2027"),
  orange: Color("#7a431c"),
  yellow: Color("#615324"),
  green: Color("#335525"),
  aqua: Color("#1A5190"),
  blue: Color("#43288a"),
  purple: Color("#6c0880"),
  magenta: Color("#950977"),
  bg: Color("#b0d0b8"),
  badge: Badge.Red
};

export { FogTheme };
