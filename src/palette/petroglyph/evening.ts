import { Badge } from "../../types/badge";
import { ThemeBasePalette } from "../../types/themeBasePalette";
import Color = require("color");

// Modified version of https://github.com/haystackandroid/rusticated
// Inspired by Rusticated + OliveCRT + Lunaria + Insecta

export const PetroglyphEveningTheme: ThemeBasePalette = {
  fg: Color("#282c26"),
  grey: Color("#656565"),
  red: Color("#834742"),
  orange: Color("#745034"),
  yellow: Color("#645826"),
  green: Color("#2c633f"), // #485e33
  aqua: Color("#006470"), // #106659
  blue: Color("#3c5a89"),
  purple: Color("#5a517e"),
  magenta: Color("#784872"),
  bg: Color("#d3d2ce"),
  badge: Badge.Green
};