import { Badge } from "../../types/badge";
import { ThemeBasePalette } from "../../types/themeBasePalette";
import Color = require("color");

// Implementation of https://github.com/reobin/olive-crt.nvim

const OliveCRTLightTheme: ThemeBasePalette = {
  fg: Color("#282c26"),
  grey: Color("#60685b"),
  red: Color("#88413c"),
  orange: Color("#985300"), // ALT: #a34c10
  yellow: Color("#8a5f00"),
  green: Color("#4f6718"), // ALT: #648221
  aqua: Color("#286257"),  
  blue: Color("#116a92"),
  purple: Color("#72579f"),
  magenta: Color("#72579f"),
  bg: Color("#d7d9d3"),
  badge: Badge.Green
};

export { OliveCRTLightTheme };
