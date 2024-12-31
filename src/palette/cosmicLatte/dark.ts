import { themeBasePalette } from "../../types/themeBasePalette";
import Color = require("color");

const CosmicLatteDarkTheme: themeBasePalette = {
  foreground: {
    fg: Color("#abb0c0"),
    red: Color("#c17b8d"),
    orange: Color("#b27961"),
    yellow: Color("#b28761"),
    green: Color("#7d9761"),
    aqua: Color("#459d90"),
    blue: Color("#5496bd"),
    purple: Color("#9b85bb"),
  },
  background: {
    bg: Color("#202a31"),
    grey: Color("#898f9e"),
    shadow: Color("#000000"),
  },
};

export { CosmicLatteDarkTheme };
