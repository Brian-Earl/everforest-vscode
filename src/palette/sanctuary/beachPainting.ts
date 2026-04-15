import { Badge } from "../../types/badge";
import { ThemeBasePalette } from "../../types/themeBasePalette";
import Color = require("color");

// Inspired by Morning Sun, Rusticated, Old Book
// https://lospec.com/palette-list/insecta
// https://lospec.com/palette-list/aged-terracotta-16
// https://lospec.com/palette-list/waldgeist
// https://lospec.com/palette-list/aragon16
// https://lospec.com/palette-list/oldsand-16
// https://www.pantone.com/articles/color-news/creative-mixology-a-palette-reflective-of-artful-individuality-and-free-spirited-aesthetic
// https://www.pantone.com/articles/color-news/the-golden-hour
// https://connect.pantone.com/?utm_source=pantone.com&utm_medium=palette+preview&utm_campaign=coy25&utm_id=undefined&utm_term=undefined&utm_content=floral+pathways#/color-insider/sensory-color-direction-spring-summer-2026-interiors

const SanctuaryBeachPaintingTheme: ThemeBasePalette = {
  fg: Color("#382d2a"), // + 
  grey: Color("#5c3e31"), // + 
  red: Color("#7c423c"), // +
  orange: Color("#7d573b"),
  yellow: Color("#645826"),
  green: Color("#3b5442"), // +
  aqua: Color("#006068"), // +
  blue: Color("#1f4477"), // +
  purple: Color("#65444e"), // +
  magenta: Color("#872131"), // +
  bg: Color("#d9cbae"), // #e0d1bd https://www.pantone.com/color-finder/13-0908-TCX/ // #d8cbc6 Crystal Grey // #f0dfcc
  badge: Badge.Red 
};

export { SanctuaryBeachPaintingTheme };