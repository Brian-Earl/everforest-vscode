import { backgroundPalette } from "../types/backgroundPalette";
import { backgroundBasePalette } from "../types/backgroundBasePalette";
import { foregroundBasePalette } from "../types/foregroundBasePalette";
import { foregroundPalette } from "../types/foregroundPalette";
import { Palette } from "../interface";

function generateDarkSoftBackground(
  base: backgroundBasePalette
): backgroundPalette {
  return {
    bg0: base.bg.darken(13).hex(),
    bg1: base.bg.hex(),
    bg: base.bg.lighten(3.5).hex(),
    bg2: base.bg.lighten(3.5).lighten(4).hex(),
    bg3: base.bg.lighten(3.5).lighten(9).hex(),
    bg4: base.bg.lighten(3.5).lighten(15).hex(),
    bg5: base.bg.lighten(3.5).lighten(19).hex(),
    grey0: base.grey.darken(4).hex(),
    grey1: base.grey.hex(),
    grey2: base.grey.lighten(17.5).hex(),
    shadow: base.shadow.hex(),
  };
}

function generateDarkMediumBackground(
  base: backgroundBasePalette
): backgroundPalette {
  return {
    bg0: base.bg.darken(27).hex(),
    bg1: base.bg.darken(13).hex(),
    bg: base.bg.hex(),
    bg2: base.bg.lighten(4).hex(),
    bg3: base.bg.lighten(9).hex(),
    bg4: base.bg.lighten(15).hex(),
    bg5: base.bg.lighten(19).hex(),
    grey0: base.grey.darken(4).hex(),
    grey1: base.grey.hex(),
    grey2: base.grey.lighten(17.5).hex(),
    shadow: base.shadow.hex(),
  };
}

function generateDarkHardBackground(
  base: backgroundBasePalette
): backgroundPalette {
  return {
    bg0: base.bg.darken(13).darken(30).hex(),
    bg1: base.bg.darken(13).darken(15).hex(),
    bg: base.bg.darken(13).hex(),
    bg2: base.bg.darken(13).lighten(4).hex(),
    bg3: base.bg.darken(13).lighten(9).hex(),
    bg4: base.bg.darken(13).lighten(15).hex(),
    bg5: base.bg.darken(13).lighten(19).hex(),
    grey0: base.grey.darken(4).hex(),
    grey1: base.grey.hex(),
    grey2: base.grey.lighten(17.5).hex(),
    shadow: base.shadow.hex(),
  };
}

function generateDarkForeground(
  base: foregroundBasePalette
): foregroundPalette {
  return {
    fg: base.fg.hex(),
    red: base.red.hex(),
    orange: base.orange.hex(),
    yellow: base.yellow.hex(),
    green: base.green.hex(),
    aqua: base.aqua.hex(),
    blue: base.blue.hex(),
    purple: base.purple.hex(),
    dimRed: base.red.desaturate(10).lighten(4).hex(),
    dimOrange: base.orange.desaturate(4).lighten(11).hex(),
    dimYellow: base.yellow.desaturate(14).lighten(15).hex(),
    dimGreen: base.green.desaturate(54).lighten(19).hex(),
    dimAqua: base.aqua.desaturate(11).lighten(17).hex(),
    dimBlue: base.blue.desaturate(11).lighten(10).hex(),
    dimPurple: base.purple.desaturate(9).lighten(9).hex(),
    badge: base.green.hex(),
  };
}

function generateLightSoftBackground(
  base: backgroundBasePalette
): backgroundPalette {
  return {
    bg0: base.bg.darken(5).desaturate(30).darken(4).desaturate(19).hex(),
    bg1: base.bg.darken(5).desaturate(30).darken(4).desaturate(14).hex(),
    bg: base.bg.darken(5).desaturate(30).hex(),
    bg2: base.bg.darken(5).desaturate(30).darken(4).desaturate(14).hex(),
    bg3: base.bg.darken(5).desaturate(30).darken(4).desaturate(19).hex(),
    bg4: base.bg.darken(5).desaturate(30).darken(9).desaturate(26).hex(),
    bg5: base.bg.darken(5).desaturate(30).darken(11).desaturate(29).hex(),
    grey0: base.grey.lighten(15).hex(),
    grey1: base.grey.hex(),
    grey2: base.grey.darken(7.5).hex(),
    shadow: base.shadow.hex(),
  };
}

function generateLightMediumBackground(
  base: backgroundBasePalette
): backgroundPalette {
  return {
    bg0: base.bg.darken(6).desaturate(42).hex(),
    bg1: base.bg.darken(4).desaturate(33).hex(),
    bg: base.bg.hex(),
    bg2: base.bg.darken(4).desaturate(33).hex(),
    bg3: base.bg.darken(6).desaturate(42).hex(),
    bg4: base.bg.darken(9).desaturate(54).hex(),
    bg5: base.bg.darken(9).desaturate(59).hex(),
    grey0: base.grey.lighten(15).hex(),
    grey1: base.grey.hex(),
    grey2: base.grey.darken(7.5).hex(),
    shadow: base.shadow.hex(),
  };
}

function generateLightHardBackground(
  base: backgroundBasePalette
): backgroundPalette {
  return {
    bg0: base.bg.lighten(3).saturate(13).darken(6).desaturate(58).hex(),
    bg1: base.bg.lighten(3).saturate(13).darken(3).desaturate(41).hex(),
    bg: base.bg.lighten(3).saturate(13).hex(),
    bg2: base.bg.lighten(3).saturate(13).darken(3).desaturate(41).hex(),
    bg3: base.bg.lighten(3).saturate(13).darken(6).desaturate(58).hex(),
    bg4: base.bg.lighten(3).saturate(13).darken(8).desaturate(65).hex(),
    bg5: base.bg.lighten(3).saturate(13).darken(10).desaturate(71).hex(),
    grey0: base.grey.lighten(15).hex(),
    grey1: base.grey.hex(),
    grey2: base.grey.darken(7.5).hex(),
    shadow: base.shadow.hex(),
  };
}

function generateLightForeground(
  base: foregroundBasePalette
): foregroundPalette {
  return {
    fg: base.fg.hex(),
    red: base.red.hex(),
    orange: base.orange.hex(),
    yellow: base.yellow.hex(),
    green: base.green.hex(),
    aqua: base.aqua.hex(),
    blue: base.blue.hex(),
    purple: base.purple.hex(),
    dimRed: base.red.desaturate(10).lighten(4).hex(),
    dimOrange: base.orange.desaturate(4).lighten(11).hex(),
    dimYellow: base.yellow.desaturate(14).lighten(15).hex(),
    dimGreen: base.green.desaturate(54).lighten(19).hex(),
    dimAqua: base.aqua.desaturate(11).lighten(17).hex(),
    dimBlue: base.blue.desaturate(11).lighten(10).hex(),
    dimPurple: base.purple.desaturate(9).lighten(9).hex(),
    badge: base.green.hex(),
  };
}

function generatePalette(
  foreground: foregroundPalette,
  background: backgroundPalette
): Palette {
  return {
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
