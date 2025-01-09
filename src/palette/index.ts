/*---------------------------------------------------------------------------------------------
 *  Homepage:   https://github.com/sainnhe/everforest-vscode
 *  Copyright:  2020 Sainnhe Park <i@sainnhe.dev>
 *  License:    MIT
 *--------------------------------------------------------------------------------------------*/

import { Palette } from "../interface";
import { StellarizedDarkTheme } from "./stellarized/dark";
import { StellarizedLightTheme } from "./stellarized/light";
import {
  generateForeground,
  generateBackground,
  generatePalette,
} from "../utils/paletteUtils";
import { backgroundPalette } from "../types/backgroundPalette";
import { foregroundPalette } from "../types/foregroundPalette";
import { themeBasePalette } from "../types/themeBasePalette";
import { CosmicLatteDarkTheme } from "./cosmicLatte/dark";
import { CosmicLatteLightTheme } from "./cosmicLatte/light";
import { RusticatedTheme } from "./rusticated/light";

export function getPalette(
  variant: string,
  theme: string
): Palette {
  let palette: themeBasePalette = StellarizedDarkTheme;
  let paletteBackground: backgroundPalette = generateBackground(palette, variant);
  let paletteForeground: foregroundPalette = generateForeground(palette);
  if (theme === "stellarized") {
    if (variant === "dark") {
      palette = StellarizedDarkTheme;
      paletteForeground = generateForeground(palette);
      paletteBackground = generateBackground(palette, variant);
    } else {
      palette = StellarizedLightTheme;
      paletteForeground = generateForeground(palette);
      paletteBackground = generateBackground(palette, variant);
    }
  } else if (theme === "cosmic") {
    if (variant === "dark") {
      palette = CosmicLatteDarkTheme;
      paletteForeground = generateForeground(palette);
      paletteBackground = generateBackground(palette, variant);
    } else {
      palette = CosmicLatteLightTheme;
      paletteForeground = generateForeground(palette);
      paletteBackground = generateBackground(palette, variant);
    }
  } else if (theme === "rusticated") {
    palette = RusticatedTheme;
    paletteForeground = generateForeground(palette);
    paletteBackground = generateBackground(palette, variant);
  }
  return generatePalette(paletteForeground, paletteBackground);
}