import { Badge } from "../../types/badge";
import { ThemeBasePalette } from "../../types/themeBasePalette";
import Color = require("color");

// Combination of stellarized and evergarden summer
// Name WIP

const SummerizedTheme: ThemeBasePalette = {
  fg: Color("#2B3034"),
  grey: Color("#576869"),
  red: Color("#ef6771"),
  orange: Color("#e38a5f"),
  yellow: Color("#d1a65e"),
  green: Color("#81b042"),
  aqua: Color("#66a887"),
  blue: Color("#5093ee"),
  purple: Color("#bb80eb"),
  magenta: Color("#e57fcd"),
  bg: Color("#F5EFE6"),
  badge: Badge.Green
};

export { SummerizedTheme };
