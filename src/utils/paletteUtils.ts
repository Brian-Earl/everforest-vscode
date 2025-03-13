import { backgroundPalette } from "../types/backgroundPalette";
import { foregroundPalette } from "../types/foregroundPalette";
import { themeBasePalette } from "../types/themeBasePalette";
import { Palette } from "../types/palette";

function generateBackground(
  base: themeBasePalette,
  variant: string
): backgroundPalette {
  if (variant === "dark") {
    return {
      bg:  base.bg.hex(),
      bg0: base.bg.darken(0.15).hex(),
      bg1: base.bg.darken(0.08).hex(),
      bg2: base.bg.lighten(0.08).hex(),
      bg3: base.bg.lighten(0.15).hex(),
      bg4: base.bg.lighten(0.22).hex(),
      bg5: base.bg.lighten(0.3).hex(),
      grey0: base.grey.darken(0.08).hex(),
      grey1: base.grey.hex(),
      grey2: base.grey.lighten(0.12).hex(),
      shadow: "#00000070",
    };
  } 
  return {
    bg0: base.bg.darken(0.05).hex(),
    bg1: base.bg.darken(0.02).hex(),
    bg:  base.bg.hex(),
    bg2: base.bg.darken(0.02).hex(),
    bg3: base.bg.darken(0.05).hex(),
    bg4: base.bg.darken(0.08).hex(),
    bg5: base.bg.darken(0.12).hex(),
    grey0: base.grey.lighten(0.08).hex(),
    grey1: base.grey.hex(),
    grey2: base.grey.darken(0.08).hex(),
    shadow: "#3c474d20",
  };
}

function generateForeground(
  base: themeBasePalette
): foregroundPalette {
  const palette: foregroundPalette = {
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
    badge: base.green.hex(),
  };
  return palette;
}

function generatePalette(
  foreground: foregroundPalette,
  background: backgroundPalette
): Palette {
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
