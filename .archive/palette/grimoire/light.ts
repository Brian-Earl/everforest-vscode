import { Badge } from "../../types/badge";
import { ThemeBasePalette } from "../../types/themeBasePalette";
import Color = require("color");

// Implementation of https://github.com/sainnhe/archived-colors/blob/master/colors/grimoire.vim

const GrimoireTheme: ThemeBasePalette = {
  fg: Color("#29282d"),
  grey: Color("#674529"),
  red: Color("#963d3f"),
  orange: Color("#8b4830"),
  yellow: Color("#8b4830"),
  green: Color("#3b604d"),
  aqua: Color("#3a6065"),
  blue: Color("#49576d"),
  purple: Color("#5f476f"),
  magenta: Color("#6f4767"),
  bg: Color("#c2a273"),
  badge: Badge.Red
};

export { GrimoireTheme };


// const GrimoireTheme: themeBasePalette = {
//   fg: Color("#674529"),
//   grey: Color("#7e7268"),
//   red: Color("#963d3f"),
//   orange: Color("#8b4830"),
//   yellow: Color("#8b4830"),
//   green: Color("#3b604d"),
//   aqua: Color("#3a6065"),
//   blue: Color("#49576d"),
//   purple: Color("#6f4767"),
//   magenta: Color("#6f4767"),
//   bg: Color("#c2a273")
// };