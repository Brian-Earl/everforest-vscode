import { Badge } from "../../types/badge";
import { ThemeBasePalette } from "../../types/themeBasePalette";
import Color = require("color");

// Implementation of https://lunaria.design/

export const LunariaVividLightTheme: ThemeBasePalette = {
  fg: Color("#484647"),
  grey: Color("#827e7d"),
  red: Color("#8b4a2c"),
  orange: Color("#7f6800"),
  yellow: Color("#7f6800"),
  green: Color("#3b6a39"),
  aqua: Color("#124d71"),
  blue: Color("#124d71"),
  purple: Color("#4f447a"),
  magenta: Color("#783f62"),
  bg: Color("#ebe4e1"),
  badge: Badge.Grey
};