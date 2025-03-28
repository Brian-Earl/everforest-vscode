import { Badge } from "../../types/badge";
import { ThemeBasePalette } from "../../types/themeBasePalette";
import Color = require("color");

const SanctuaryInkVaultTheme: ThemeBasePalette = {
  fg: Color("#2b3f6a"),
  grey: Color("#788498"),
  red: Color("#8f4055"),
  orange: Color("#8b5033"),
  yellow: Color("#866010"),
  green: Color("#1a6b61"),
  aqua: Color("#306d8c"),
  blue: Color("#455cba"),
  purple: Color("#7045ba"),
  magenta: Color("#904184"),
  bg: Color("#e7e5e2"),
  badge: Badge.Blue
};

export { SanctuaryInkVaultTheme };
