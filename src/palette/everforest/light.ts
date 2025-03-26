import { Badge } from "../../types/badge";
import { ThemeBasePalette } from "../../types/themeBasePalette";
import Color = require("color");

// Implementation of https://github.com/sainnhe/everforest

const EverforestLightTheme: ThemeBasePalette = {
  fg: Color("#5c6a72"),
  grey: Color("#939f91"),
  red: Color("#f85552"),
  orange: Color("#f57d26"),
  yellow: Color("#dfa000"),
  green: Color("#8da101"),
  aqua: Color("#35a77c"),
  blue: Color("#3a94c5"),
  purple: Color("#df69ba"),
  magenta: Color("#df69ba"),
  bg: Color("#fffbef"),
  badge: Badge.Green
};

export { EverforestLightTheme };
