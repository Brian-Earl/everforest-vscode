import { Badge } from "../../types/badge";
import { ThemeBasePalette } from "../../types/themeBasePalette";
import Color = require("color");

// Combination of rusticated and evergarden summer
// Name WIP

const AutumnizedTheme: ThemeBasePalette = {
  fg: Color("#444136"),
  grey: Color("#5f5a4c"),
  red: Color("#834742"),
  orange: Color("#79502f"),
  yellow: Color("#645826"),
  green: Color("#2c633f"),
  aqua: Color("#006470"),
  blue: Color("#3c5a89"),
  purple: Color("#605188"),
  magenta: Color("#784872"),
  bg: Color("#d3d2ce"), //#ebe4e1
  badge: Badge.Yellow
};

export { AutumnizedTheme };
