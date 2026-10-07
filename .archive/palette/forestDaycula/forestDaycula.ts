import { Badge } from "../../types/badge";
import { ThemeBasePalette } from "../../types/themeBasePalette";
import Color = require("color");

// Theme inspired by everforest and Daycula

const ForestDayculaTheme: ThemeBasePalette = {
  fg: Color("#e0b3a5"),
  grey: Color("#82756f"),
  red: Color("#f37c88"),
  orange: Color("#db8a6e"),
  yellow: Color("#eaad64"),
  green: Color("#aecf83"),
  aqua: Color("#a0cfad"),  
  blue: Color("#afd7da"),
  purple: Color("#ba8fe0"),
  magenta: Color("#f398c4"),
  bg: Color("#3B4646"),
  badge: Badge.Green
};

export { ForestDayculaTheme };
