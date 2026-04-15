import { Badge } from "../../types/badge";
import { ThemeBasePalette } from "../../types/themeBasePalette";
import Color = require("color");

// Implementation of https://lunaria.design/

export const LunariaSoftLightTheme: ThemeBasePalette = {
  fg: Color("#484647"),
  grey: Color("#827e7d"),
  red: Color("#886051"),
  orange: Color("#776a43"),
  yellow: Color("#776a43"),
  green: Color("#5a7259"),
  aqua: Color("#566e85"),
  blue: Color("#566e85"),
  purple: Color("#6c6686"),
  magenta: Color("#815f73"),
  bg: Color("#ebe4e1"),
  badge: Badge.Grey
};