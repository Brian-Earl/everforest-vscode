import { backgroundPalette } from "../types/backgroundPalette";
import { foregroundPalette } from "../types/foregroundPalette";
import { themeBasePalette } from "../types/themeBasePalette";
import { Palette } from "../types/palette";

function generateBackground(
  base: themeBasePalette
): backgroundPalette {
  const palette: backgroundPalette = {
    bg:  base.bg.hex(),
    bg2: base.bg.mix(base.fg, 0.05).hex(),
    ui:  base.bg.mix(base.fg, 0.2).hex(),  // 0.1
    ui2: base.bg.mix(base.fg, 0.25).hex(), // 0.15
    ui3: base.bg.mix(base.fg, 0.3).hex(),  // 0.2
    shadow: base.bg.mix(base.fg, 0.2).hex() + 70, // 0.1
  };
  return palette;
}

function generateForeground(
  base: themeBasePalette
): foregroundPalette {
  const palette: foregroundPalette = {
    tx: base.fg.hex(),
    tx2: base.fg.mix(base.grey, 0.5).hex(),
    tx3: base.grey.hex(),
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
    bg2: background.bg2,
    ui: background.ui,
    ui2: background.ui2,
    ui3: background.ui3,
    shadow: background.shadow,
    tx: foreground.tx,
    tx2: foreground.tx2,
    tx3: foreground.tx3,
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
