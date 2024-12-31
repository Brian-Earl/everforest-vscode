import { backgroundPalette } from "../types/backgroundPalette";
import { backgroundBasePalette } from "../types/backgroundBasePalette";
import { foregroundBasePalette } from "../types/foregroundBasePalette";
import { foregroundPalette } from "../types/foregroundPalette";
import { Palette } from "../interface";

function generateDarkSoftBackground(
  base: backgroundBasePalette
): backgroundPalette {
  const palette: backgroundPalette = {
    bg0: base.bg.darken(0.13).hex(),
    bg1: base.bg.hex(),
    bg: base.bg.lighten(0.035).hex(),
    bg2: base.bg.lighten(0.035).lighten(0.15).hex(),
    bg3: base.bg.lighten(0.035).lighten(0.3).hex(),
    bg4: base.bg.lighten(0.035).lighten(0.45).hex(),
    bg5: base.bg.lighten(0.035).lighten(0.6).hex(),
    grey0: base.grey.darken(0.04).hex(),
    grey1: base.grey.hex(),
    grey2: base.grey.lighten(0.175).hex(),
    shadow: base.shadow.hex() + "70",
  };
  return palette;
}

function generateDarkMediumBackground(
  base: backgroundBasePalette
): backgroundPalette {
  const palette: backgroundPalette = {
    bg0: base.bg.darken(0.27).hex(),
    bg1: base.bg.darken(0.13).hex(),
    bg: base.bg.hex(),
    bg2: base.bg.lighten(0.15).hex(),
    bg3: base.bg.lighten(0.3).hex(),
    bg4: base.bg.lighten(0.45).hex(),
    bg5: base.bg.lighten(0.6).hex(),
    grey0: base.grey.darken(0.04).hex(),
    grey1: base.grey.hex(),
    grey2: base.grey.lighten(0.175).hex(),
    shadow: base.shadow.hex() + "70",
  };
  return palette;
}

function generateDarkHardBackground(
  base: backgroundBasePalette
): backgroundPalette {
  const palette: backgroundPalette = {
    bg0: base.bg.darken(0.13).darken(0.3).hex(),
    bg1: base.bg.darken(0.13).darken(0.15).hex(),
    bg: base.bg.darken(0.13).hex(),
    bg2: base.bg.darken(0.13).lighten(0.15).hex(),
    bg3: base.bg.darken(0.13).lighten(0.3).hex(),
    bg4: base.bg.darken(0.13).lighten(0.45).hex(),
    bg5: base.bg.darken(0.13).lighten(0.6).hex(),
    grey0: base.grey.darken(0.04).hex(),
    grey1: base.grey.hex(),
    grey2: base.grey.lighten(0.175).hex(),
    shadow: base.shadow.hex() + "70",
  };
  return palette;
}

function generateDarkForeground(
  base: foregroundBasePalette
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
    dimRed: base.red.desaturate(0.1).lighten(0.04).hex(),
    dimOrange: base.orange.desaturate(0.04).lighten(0.11).hex(),
    dimYellow: base.yellow.desaturate(0.14).lighten(0.15).hex(),
    dimGreen: base.green.desaturate(0.54).lighten(0.19).hex(),
    dimAqua: base.aqua.desaturate(0.11).lighten(0.17).hex(),
    dimBlue: base.blue.desaturate(0.11).lighten(0.1).hex(),
    dimPurple: base.purple.desaturate(0.09).lighten(0.09).hex(),
    badge: base.green.hex(),
  };
  return palette;
}

function generateLightSoftBackground(
  base: backgroundBasePalette
): backgroundPalette {
  const palette: backgroundPalette = {
    bg0: base.bg
      .darken(0.05)
      .desaturate(0.3)
      .darken(0.04)
      .desaturate(0.19)
      .hex(),
    bg1: base.bg
      .darken(0.05)
      .desaturate(0.3)
      .darken(0.04)
      .desaturate(0.14)
      .hex(),
    bg: base.bg.darken(0.05).desaturate(0.3).hex(),
    bg2: base.bg
      .darken(0.05)
      .desaturate(0.3)
      .darken(0.04)
      .desaturate(0.14)
      .hex(),
    bg3: base.bg
      .darken(0.05)
      .desaturate(0.3)
      .darken(0.04)
      .desaturate(0.19)
      .hex(),
    bg4: base.bg
      .darken(0.05)
      .desaturate(0.3)
      .darken(0.09)
      .desaturate(0.26)
      .hex(),
    bg5: base.bg
      .darken(0.05)
      .desaturate(0.3)
      .darken(0.11)
      .desaturate(0.29)
      .hex(),
    grey0: base.grey.lighten(0.15).hex(),
    grey1: base.grey.hex(),
    grey2: base.grey.darken(0.075).hex(),
    shadow: base.shadow.hex() + "20",
  };
  return palette;
}

function generateLightMediumBackground(
  base: backgroundBasePalette
): backgroundPalette {
  const palette: backgroundPalette = {
    bg0: base.bg.darken(0.06).desaturate(0.42).hex(),
    bg1: base.bg.darken(0.04).desaturate(0.33).hex(),
    bg: base.bg.hex(),
    bg2: base.bg.darken(0.04).desaturate(0.33).hex(),
    bg3: base.bg.darken(0.06).desaturate(0.42).hex(),
    bg4: base.bg.darken(0.09).desaturate(0.54).hex(),
    bg5: base.bg.darken(0.09).desaturate(0.59).hex(),
    grey0: base.grey.lighten(0.15).hex(),
    grey1: base.grey.hex(),
    grey2: base.grey.darken(0.075).hex(),
    shadow: base.shadow.hex() + "20",
  };
  return palette;
}

function generateLightHardBackground(
  base: backgroundBasePalette
): backgroundPalette {
  const palette: backgroundPalette = {
    bg0: base.bg
      .lighten(0.03)
      .saturate(0.13)
      .darken(0.06)
      .desaturate(0.58)
      .hex(),
    bg1: base.bg
      .lighten(0.03)
      .saturate(0.13)
      .darken(0.03)
      .desaturate(0.41)
      .hex(),
    bg: base.bg.lighten(0.03).saturate(0.13).hex(),
    bg2: base.bg
      .lighten(0.03)
      .saturate(0.13)
      .darken(0.03)
      .desaturate(0.41)
      .hex(),
    bg3: base.bg
      .lighten(0.03)
      .saturate(0.13)
      .darken(0.06)
      .desaturate(0.58)
      .hex(),
    bg4: base.bg
      .lighten(0.03)
      .saturate(0.13)
      .darken(0.08)
      .desaturate(0.65)
      .hex(),
    bg5: base.bg
      .lighten(0.03)
      .saturate(0.13)
      .darken(0.1)
      .desaturate(0.71)
      .hex(),
    grey0: base.grey.lighten(15).hex(),
    grey1: base.grey.hex(),
    grey2: base.grey.darken(0.075).hex(),
    shadow: base.shadow.hex() + "20",
  };
  return palette;
}

function generateLightForeground(
  base: foregroundBasePalette
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
    dimRed: base.red.desaturate(0.1).lighten(0.04).hex(),
    dimOrange: base.orange.desaturate(0.04).lighten(0.11).hex(),
    dimYellow: base.yellow.desaturate(0.14).lighten(0.15).hex(),
    dimGreen: base.green.desaturate(0.54).lighten(0.19).hex(),
    dimAqua: base.aqua.desaturate(0.11).lighten(0.17).hex(),
    dimBlue: base.blue.desaturate(0.11).lighten(0.1).hex(),
    dimPurple: base.purple.desaturate(0.09).lighten(0.09).hex(),
    badge: base.green.hex(),
  };
  return palette;
}

function generatePalette(
  foreground: foregroundPalette,
  background: backgroundPalette
): Palette {
  const palette: Palette = {
    bg0: background.bg0,
    bg1: background.bg1,
    bg: background.bg,
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
  generateDarkForeground,
  generateDarkHardBackground,
  generateDarkMediumBackground,
  generateDarkSoftBackground,
  generateLightForeground,
  generateLightHardBackground,
  generateLightMediumBackground,
  generateLightSoftBackground,
  generatePalette,
};
