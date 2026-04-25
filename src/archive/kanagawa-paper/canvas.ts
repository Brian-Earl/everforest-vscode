import { Badge } from "../../types/badge";
import { ThemeBasePalette } from "../../types/themeBasePalette";
import Color = require("color");

// Implementation of https://github.com/thesimonho/kanagawa-paper.nvim/blob/master/lua/kanagawa-paper/themes/canvas.lua

export const KanagawaPaperCanvasTheme: ThemeBasePalette = {
  fg: Color("#73787d"),
  grey: Color("#aeaea6"),
  red: Color("#c27672"),
  orange: Color("#b28d77"),
  yellow: Color("#a7956a"),
  green: Color("#7e9579"),
  aqua: Color("#809ba7"), // Using blue, for aqua use #7b958e
  blue: Color("#7e8faf"), // Using teal
  purple: Color("#938aa9"), // Using springViolet1, for purple use #7880a5
  magenta: Color("#9e7e98"),
  bg: Color("#e1e1de"),
  badge: Badge.Yellow // Should be blue (teal technically), but I like green and yellow better
};