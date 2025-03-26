import Color = require("color");
import { Badge } from "./badge";

type ThemeBasePalette = {
  fg: Color;
  grey: Color;
  red: Color;
  orange: Color;
  yellow: Color;
  green: Color;
  aqua: Color;
  blue: Color;
  purple: Color;
  magenta: Color;
  bg: Color;
  badge: Badge;
};

export { ThemeBasePalette };
