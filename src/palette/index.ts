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
import { BackgroundPalette } from "../types/backgroundPalette";
import { ForegroundPalette } from "../types/foregroundPalette";
import { ThemeBasePalette } from "../types/themeBasePalette";
import { Theme } from "../types/theme";

export function getPalette(
  theme: Theme
): Palette {
  let palette: ThemeBasePalette = theme.palette;
  let variant: string = theme.variant
  let paletteBackground: BackgroundPalette = generateBackground(palette, variant);
  let paletteForeground: ForegroundPalette = generateForeground(palette);
  return generatePalette(paletteForeground, paletteBackground);
}