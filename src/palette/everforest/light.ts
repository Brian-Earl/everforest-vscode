import { Badge } from "../../types/badge";
import { ThemeBasePalette } from "../../types/themeBasePalette";
import Color = require("color");

// Implementation of https://github.com/sainnhe/everforest
// Light Hard

export const EverforestLightTheme: ThemeBasePalette = {
  fg: Color("#5c6a72"),
  grey: Color("#939f91"),
  red: Color("#f85552"),
  orange: Color("#f57d26"),
  yellow: Color("#dfa000"),
  green: Color("#8da101"),
  aqua: Color("#35a77c"),
  blue: Color("#3a94c5"),
  purple: Color("#df69ba"),
  magenta: Color("#df69ba"),
  bg: Color("#fffbef"),
  badge: Badge.Green
};

// Refernece:
// export default {
//   bg0: "#f2efdf",
//   bg1: "#f8f5e4",
//   bg: "#fffbef",
//   bg2: "#f8f5e4",
//   bg3: "#f2efdf",
//   bg4: "#edeada",
//   bg5: "#e8e5d5",
//   grey0: "#a4ad9e",
//   grey1: "#939f91",
//   grey2: "#879686",
//   shadow: "#3c474d20",
// };