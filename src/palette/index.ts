/*---------------------------------------------------------------------------------------------
 *  Homepage:   https://github.com/sainnhe/everforest-vscode
 *  Copyright:  2020 Sainnhe Park <i@sainnhe.dev>
 *  License:    MIT
 *--------------------------------------------------------------------------------------------*/

import { Palette } from "../types/palette";
import {
  generateForeground,
  generateBackground,
  generatePalette,
} from "../utils/paletteUtils";
import { backgroundPalette } from "../types/backgroundPalette";
import { foregroundPalette } from "../types/foregroundPalette";
import { themeBasePalette } from "../types/themeBasePalette";
import { theme } from "../types/theme";

export function getPalette(
  theme: theme
): Palette {
  let palette: themeBasePalette = theme.palette;
  let variant: string = theme.variant
  let paletteBackground: backgroundPalette = generateBackground(palette, variant);
  let paletteForeground: foregroundPalette = generateForeground(palette);
  return generatePalette(paletteForeground, paletteBackground);
}