import { Accent } from "../../types/badge";
import { ThemeBasePalette } from "../../types/themeBasePalette";
import Color = require("color");

// Modified version of https://github.com/haystackandroid/rusticated
// Inspired by Rusticated + OliveCRT + Lunaria + Insecta

export const PetroglyphEveningTheme: ThemeBasePalette = {
  fg: Color("#444136"), //#282c26
  grey: Color("#5f5a4c"), //#656565
  red: Color("#834648"),
  orange: Color("#794b24"),
  yellow: Color("#645826"),
  green: Color("#475f2a"),
  aqua: Color("#27664a"),
  blue: Color("#3c5a89"),
  purple: Color("#605188"),
  magenta: Color("#784872"),
  bg: Color("#d3d2ce"), //#d3d2ce //#b8b6a8
  accent: Accent.Green
};