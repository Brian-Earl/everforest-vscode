/*---------------------------------------------------------------------------------------------
 *  Homepage:   https://github.com/sainnhe/everforest-vscode
 *  Copyright:  2020 Sainnhe Park <i@sainnhe.dev>
 *  License:    MIT
 *--------------------------------------------------------------------------------------------*/

import { Palette } from "../interface";
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
  let paletteBackground: backgroundPalette = generateBackground(palette);
  let paletteForeground: foregroundPalette = generateForeground(palette);
  return generatePalette(paletteForeground, paletteBackground);
}