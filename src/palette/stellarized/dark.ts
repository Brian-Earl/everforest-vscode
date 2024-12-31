import { themeBasePalette } from "../../types/themeBasePalette";
import Color = require("color");

const StellarizedDarkTheme: themeBasePalette = {
  foreground: {
    fg: Color("#bead9d"),
    red: Color("#ca7375"),
    orange: Color("#b87e5f"),
    yellow: Color("#a58949"),
    green: Color("#5c9a61"),
    aqua: Color("#009ba2"),
    blue: Color("#578fcc"),
    purple: Color("#b178b5"),
  },
  background: {
    bg: Color("#222532"),
    grey: Color("#9d8875"),
    shadow: Color("#000000"),
  },
};

export { StellarizedDarkTheme };
