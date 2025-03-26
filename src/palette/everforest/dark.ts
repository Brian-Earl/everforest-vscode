import { Badge } from "../../types/badge";
import { ThemeBasePalette } from "../../types/themeBasePalette";
import Color = require("color");

// Implementation of https://github.com/sainnhe/everforest

const EverforestDarkTheme: ThemeBasePalette = {
  fg: Color("#d3c6aa"),
  grey: Color("#859289"),
  red: Color("#e67e80"),
  orange: Color("#e69875"),
  yellow: Color("#dbbc7f"),
  green: Color("#a7c080"),
  aqua: Color("#83c092"),
  blue: Color("#7fbbb3"),
  purple: Color("#d699b6"),
  magenta: Color("#d699b6"),
  bg: Color("#2d353b"),
  badge: Badge.Green
};

export { EverforestDarkTheme };
