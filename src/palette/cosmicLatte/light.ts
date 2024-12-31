import { themeBasePalette } from "../../types/themeBasePalette";
import Color = require("color");

const CosmicLatteLightTheme: themeBasePalette = {
  foreground: {
    fg: Color("#485a62"),
    red: Color("#c44756"),
    orange: Color("#a8572f"),
    yellow: Color("#916d03"),
    green: Color("#1f8332"),
    aqua: Color("#007f8a"),
    blue: Color("#0075c9"),
    purple: Color("#a154ae"),
  },
  background: {
    bg: Color("#fff8e7"),
    grey: Color("#63757e"),
    shadow: Color("#202a31"),
  },
};

export { CosmicLatteLightTheme };
