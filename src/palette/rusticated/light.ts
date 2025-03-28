import { Badge } from "../../types/badge";
import { ThemeBasePalette } from "../../types/themeBasePalette";
import Color = require("color");

// Implementation of https://github.com/haystackandroid/rusticated

const RusticatedTheme: ThemeBasePalette = {
  fg: Color("#444136"),
  grey: Color("#5f5a4c"),
  red: Color("#834742"),
  orange: Color("#7d573b"),
  yellow: Color("#645826"),
  green: Color("#2c633f"),
  aqua: Color("#006470"),
  blue: Color("#3c5a89"),
  purple: Color("#784872"),
  magenta: Color("#784872"), //TODO: Make Magenta Color
  bg: Color("#d3d2ce"),
  badge: Badge.Yellow
};

export { RusticatedTheme };
