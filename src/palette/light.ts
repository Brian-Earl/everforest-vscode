import { themeBasePalette } from "../types/themeBasePalette";
import Color = require("color");

const LightTheme: themeBasePalette = {
  foreground: {
    fg: Color("#4a5067"),
    red: Color("#c6394c"),
    orange: Color("#cf5222"),
    yellow: Color("#8b6800"),
    green: Color("#007f25"),
    aqua: Color("#007989"),
    blue: Color("#006dcc"),
    purple: Color("#a348ae"),
  },
  background: {
    bg: Color("#fceee0"),
    grey: Color("#4a5067"),
    shadow: Color("#2d3243"),
  },
};

export { LightTheme };
