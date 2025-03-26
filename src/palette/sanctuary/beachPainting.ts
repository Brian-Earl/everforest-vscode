import { Badge } from "../../types/badge";
import { ThemeBasePalette } from "../../types/themeBasePalette";
import Color = require("color");

// Inspired by Morning Sun, Rusticated, Old Book

// #708677 #949e8e
const SanctuaryBeachPaintingTheme: ThemeBasePalette = {
  fg: Color("#292124"), // +
  grey: Color("#976b49"), // #7a5238 // +
  red: Color("#6e2f34"), // #94323f // #652a23 // #a13533 // +
  orange: Color("#963d17"), // -
  yellow: Color("#624617"), // +
  green: Color("#4b5727"), // +
  aqua: Color("#2c6057"), // -
  blue: Color("#3b5272"), // +
  purple: Color("#5e4458"), // #4D3B4F // +
  magenta: Color("#874051"), // #6A374A // +
  bg: Color("#decdbe"), // +
  badge: Badge.Yellow
};

export { SanctuaryBeachPaintingTheme };

//   fg: Color("#100f0f"), // #29282d // #000000
//   grey: Color("#585148"), // #585148
//   red: Color("#5E0F04"),
//   orange: Color("#683504"),
//   yellow: Color("#8E6B01"),
//   green: Color("#3D4C07"),
//   aqua: Color("#1C6C66"),
//   blue: Color("#1A4F8C"),
//   purple: Color("#5E409D"),
//   magenta: Color("#85308A"),

// fg: Color("#29282d"),
//   grey: Color("#514B43"), 
//   red: Color("#834741"),
//   orange: Color("#734E35"),
//   yellow: Color("#645826"),
//   green: Color("#43602d"),
//   aqua: Color("#06625a"),
//   blue: Color("#3c5886"),
//   purple: Color("#624e82"),
//   magenta: Color("#7f4666"),
//   bg: Color("#dfcbbf") // #decdbe

// const SanctuaryBeachPaintingTheme: themeBasePalette = {
//   fg: Color("#29282d"), // #111111
//   grey: Color("#514B43"), 
//   red: Color("#83322b"), // #834741
//   orange: Color("#734E35"),
//   yellow: Color("#645826"),
//   green: Color("#43602d"),
//   aqua: Color("#06625a"),
//   blue: Color("#3c5886"),
//   purple: Color("#624e82"),
//   magenta: Color("#7f4666"),
//   bg: Color("#dfcbbf") // #decdbe #c3bbad #D9CBAE #dcd0c2
// };