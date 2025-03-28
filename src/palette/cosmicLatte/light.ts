import { Badge } from "../../types/badge";
import { ThemeBasePalette } from "../../types/themeBasePalette";
import Color = require("color");

// Implementation of https://github.com/haystackandroid/cosmic_latte

const CosmicLatteLightTheme: ThemeBasePalette = {
  fg: Color("#485a62"),
  grey: Color("#63757e"),
  red: Color("#c44756"),
  orange: Color("#a8572f"),
  yellow: Color("#916d03"),
  green: Color("#1f8332"),
  aqua: Color("#007f8a"),
  blue: Color("#0075c9"),
  purple: Color("#a154ae"),
  magenta: Color("#b5437e"),
  bg: Color("#fff8e7"),
  badge: Badge.Yellow
};

export { CosmicLatteLightTheme };
