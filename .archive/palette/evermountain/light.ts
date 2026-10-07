import { Badge } from "../../src/types/badge";
import { ThemeBasePalette } from "../../src/types/themeBasePalette";
import Color = require("color");

// Modified version of https://github.com/haystackandroid/rusticated

export const EvermountainLightTheme: ThemeBasePalette = {
  fg: Color("#444136"), //#292418 //#282c26
  grey: Color("#5f5a4c"),
  red: Color("#834742"),
  orange: Color("#745034"), //#7d491b //#8a5034
  yellow: Color("#645826"),
  green: Color("#475f2a"), //#4b5e26
  aqua: Color("#106659"),
  blue: Color("#3c5a89"),
  purple: Color("#605188"),
  magenta: Color("#784872"),
  bg: Color("#d3d2ce"), //#ebe4e1
  badge: Badge.Yellow
};