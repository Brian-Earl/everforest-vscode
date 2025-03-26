import { Badge } from "../../types/badge";
import { ThemeBasePalette } from "../../types/themeBasePalette";
import Color = require("color");

const SanctuaryMorningSunTheme: ThemeBasePalette = {
  fg: Color("#212326"), // #292418
  grey: Color("#7a5238"), // #896046
  red: Color("#8f4055"), // #96445A
  orange: Color("#8b5033"), // #914915
  yellow: Color("#866010"),
  green: Color("#1a6b61"),
  aqua: Color("#306d8c"),
  blue: Color("#455cba"),
  purple: Color("#7045ba"),
  magenta: Color("#904184"),
  bg: Color("#e3d1c5"),
  badge: Badge.Orange
};

export { SanctuaryMorningSunTheme };