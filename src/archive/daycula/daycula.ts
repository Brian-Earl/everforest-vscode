import { Badge } from "../../types/badge";
import { ThemeBasePalette } from "../../types/themeBasePalette";
import Color = require("color");

// Implementation of https://github.com/ghifarit53/daycula-vim

const DayculaTheme: ThemeBasePalette = {
  fg: Color("#d7b7bb"),
  grey: Color("#30357F"),
  red: Color("#ff4ea5"),
  orange: Color("#e38a5f"), // Made for theme
  yellow: Color("#eaad64"),
  green: Color("#7eb564"),
  aqua: Color("#6cac99"),  
  blue: Color("#7a89ec"),
  purple: Color("#b66cdc"),
  magenta: Color("#d161b8"), // Made for theme
  bg: Color("#1a1d45"),
  badge: Badge.Yellow
};

export { DayculaTheme };
