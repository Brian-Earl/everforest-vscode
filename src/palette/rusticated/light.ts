import { themeBasePalette } from "../../types/themeBasePalette";
import Color = require("color");

const RusticatedTheme: themeBasePalette = {
  foreground: {
    fg: Color("#444136"),
    red: Color("#834742"),
    orange: Color("#7d573b"),
    yellow: Color("#645826"),
    green: Color("#2c633f"),
    aqua: Color("#006470"),
    blue: Color("#3c5a89"),
    purple: Color("#784872"),
  },
  background: {
    bg: Color("#d3d2ce"),
    grey: Color("#5f5a4c"),
    shadow: Color("#2d3243"),
  },
};

export { RusticatedTheme };
