import Color = require("color");
import { Accent } from "./badge";

export type ThemeBasePalette = {
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
  accent: Accent;
};