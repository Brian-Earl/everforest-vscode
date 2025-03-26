import { BackgroundPalette } from "../types/backgroundPalette";
import { ForegroundPalette } from "../types/foregroundPalette";
import { ThemeBasePalette } from "../types/themeBasePalette";
import { Palette } from "../types/palette";
import { Badge } from "../types/badge";
import Color = require("color");

function generateBackground(base: ThemeBasePalette, variant: string): BackgroundPalette {
  // These can probably be combined and have the if statement removed
  // Maybe give dark theme the same mixing as the light theme
  if (variant === "dark") {
    return {
      bg0: base.bg.darken(0.26).hex(),
      bg1: base.bg.darken(0.13).hex(),
      bg: base.bg.hex(), 
      bg2: base.bg.mix(base.fg, 0.06).hex(),
      bg3: base.bg.mix(base.fg, 0.12).hex(),
      bg4: base.bg.mix(base.fg, 0.18).hex(),
      bg5: base.bg.mix(base.fg, 0.24).hex(),

      grey0: base.grey.darken(0.15).hex(), // 0.08
      grey1: base.grey.hex(),
      grey2: base.grey.lighten(0.15).hex(), // 0.12

      shadow: base.fg.alpha(0.125).hex() + "20",
    };
  } 
  return {
    bg0: base.bg.mix(base.fg, 0.08).hex(), // 0.12
    bg1: base.bg.mix(base.fg, 0.04).hex(), // 0.06
    bg: base.bg.hex(),
    bg2: base.bg.mix(base.fg, 0.04).hex(), // 0.06
    bg3: base.bg.mix(base.fg, 0.08).hex(), // 0.12
    bg4: base.bg.mix(base.fg, 0.14).hex(), // 0.18
    bg5: base.bg.mix(base.fg, 0.20).hex(), // 0.24

    grey0: base.grey.mix(base.bg, 0.15).hex(), // 0.2
    grey1: base.grey.hex(),
    grey2: base.grey.mix(base.fg, 0.15).hex(), 

    shadow: base.fg.alpha(0.125).hex() + "20",
  };
}

function generateForeground(base: ThemeBasePalette): ForegroundPalette {
  const palette: ForegroundPalette = {
    fg: base.fg.hex(),
    red: base.red.hex(),
    orange: base.orange.hex(),
    yellow: base.yellow.hex(),
    green: base.green.hex(),
    aqua: base.aqua.hex(),
    blue: base.blue.hex(),
    purple: base.purple.hex(),
    dimRed: base.red.mix(base.fg, 0.1).hex(),
    dimOrange: base.orange.mix(base.fg, 0.1).hex(),
    dimYellow: base.yellow.mix(base.fg, 0.1).hex(),
    dimGreen: base.green.mix(base.fg, 0.1).hex(),
    dimAqua: base.aqua.mix(base.fg, 0.1).hex(),
    dimBlue: base.blue.mix(base.fg, 0.1).hex(),
    dimPurple: base.purple.mix(base.fg, 0.1).hex(),
    badge: badgeColor(base).hex(),
  };
  return palette;
}

function badgeColor(base: ThemeBasePalette): Color {
  switch(base.badge) {
    case Badge.Red:
      return base.red;
    case Badge.Orange:
      return base.orange;
    case Badge.Yellow:
      return base.yellow;
    case Badge.Green:
      return base.green;
    case Badge.Aqua:
      return base.aqua;
    case Badge.Blue:
      return base.blue;
    case Badge.Purple:
      return base.purple;
    case Badge.Magenta:
      return base.magenta;
    case Badge.White:
      return base.fg;
    case Badge.Grey:
      return base.grey;
    case Badge.Black:
      return base.bg;
    default:
      return base.grey;
  }
}

function generatePalette(foreground: ForegroundPalette, background: BackgroundPalette): Palette {
  const palette: Palette = {
    bg: background.bg,
    bg0: background.bg0,
    bg1: background.bg1,
    bg2: background.bg2,
    bg3: background.bg3,
    bg4: background.bg4,
    bg5: background.bg5,
    grey0: background.grey0,
    grey1: background.grey1,
    grey2: background.grey2,
    shadow: background.shadow,
    fg: foreground.fg,
    red: foreground.red,
    orange: foreground.orange,
    yellow: foreground.yellow,
    green: foreground.green,
    aqua: foreground.aqua,
    blue: foreground.blue,
    purple: foreground.purple,
    dimRed: foreground.dimRed,
    dimOrange: foreground.dimOrange,
    dimYellow: foreground.dimYellow,
    dimGreen: foreground.dimGreen,
    dimAqua: foreground.dimAqua,
    dimBlue: foreground.dimBlue,
    dimPurple: foreground.dimPurple,
    badge: foreground.badge,
  };
  return palette;
}

export {
  generateBackground,
  generateForeground,
  generatePalette,
};
