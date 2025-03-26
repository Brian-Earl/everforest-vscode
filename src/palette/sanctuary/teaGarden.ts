import { Badge } from "../../types/badge";
import { ThemeBasePalette } from "../../types/themeBasePalette";
import Color = require("color");

const SanctuaryTeaGardenTheme: ThemeBasePalette = {
  fg: Color("#2b3f6a"),
  grey: Color("#688b57"),
  red: Color("#96445A"),
  orange: Color("#914915"),
  yellow: Color("#866010"),
  green: Color("#1A6B61"),
  aqua: Color("#306d8c"),
  blue: Color("#455cba"),
  purple: Color("#7045ba"),
  magenta: Color("#904184"),
  bg: Color("#ccdaba"),
  badge: Badge.Green
};

export { SanctuaryTeaGardenTheme };
