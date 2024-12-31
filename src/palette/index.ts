/*---------------------------------------------------------------------------------------------
 *  Homepage:   https://github.com/sainnhe/everforest-vscode
 *  Copyright:  2020 Sainnhe Park <i@sainnhe.dev>
 *  License:    MIT
 *--------------------------------------------------------------------------------------------*/

import { Configuration, Palette } from "../interface";
import { StellarizedDarkTheme } from "./stellarized/dark";
import { StellarizedLightTheme } from "./stellarized/light";
import {
  generateDarkForeground,
  generateDarkHardBackground,
  generateDarkMediumBackground,
  generateDarkSoftBackground,
  generateLightForeground,
  generateLightHardBackground,
  generateLightMediumBackground,
  generateLightSoftBackground,
  generatePalette,
} from "../utils/paletteUtils";
import { backgroundPalette } from "../types/backgroundPalette";
import { foregroundPalette } from "../types/foregroundPalette";
import { themeBasePalette } from "../types/themeBasePalette";
import { CosmicLatteDarkTheme } from "./cosmicLatte/dark";
import { CosmicLatteLightTheme } from "./cosmicLatte/light";
import { RusticatedTheme } from "./rusticated/light";

export function getPalette(
  configuration: Configuration,
  variant: string,
  theme: string
): Palette {
  let palette: themeBasePalette = StellarizedDarkTheme;
  let paletteBackground: backgroundPalette = generateDarkMediumBackground(
    palette.background
  );
  let paletteForeground: foregroundPalette = generateDarkForeground(
    palette.foreground
  );
  if (theme === "stellarized") {
    if (variant === "dark") {
      palette = StellarizedDarkTheme;
      paletteForeground = generateDarkForeground(palette.foreground);
      switch (configuration.darkContrast) {
        case "hard": {
          paletteBackground = generateDarkHardBackground(palette.background);
          break;
        }
        case "medium": {
          paletteBackground = generateDarkMediumBackground(palette.background);
          break;
        }
        case "soft": {
          paletteBackground = generateDarkSoftBackground(palette.background);
          break;
        }
        default: {
          paletteBackground = generateDarkMediumBackground(palette.background);
        }
      }
    } else {
      palette = StellarizedLightTheme;
      paletteForeground = generateLightForeground(palette.foreground);
      switch (configuration.lightContrast) {
        case "hard": {
          paletteBackground = generateLightHardBackground(palette.background);
          break;
        }
        case "medium": {
          paletteBackground = generateLightMediumBackground(palette.background);
          break;
        }
        case "soft": {
          paletteBackground = generateLightSoftBackground(palette.background);
          break;
        }
        default: {
          paletteBackground = generateLightMediumBackground(palette.background);
        }
      } // }}}
    }
  } else if (theme === "cosmic") {
    if (variant === "dark") {
      palette = CosmicLatteDarkTheme;
      paletteForeground = generateDarkForeground(palette.foreground);
      switch (configuration.darkContrast) {
        case "hard": {
          paletteBackground = generateDarkHardBackground(palette.background);
          break;
        }
        case "medium": {
          paletteBackground = generateDarkMediumBackground(palette.background);
          break;
        }
        case "soft": {
          paletteBackground = generateDarkSoftBackground(palette.background);
          break;
        }
        default: {
          paletteBackground = generateDarkMediumBackground(palette.background);
        }
      }
    } else {
      palette = CosmicLatteLightTheme;
      paletteForeground = generateLightForeground(palette.foreground);
      switch (configuration.lightContrast) {
        case "hard": {
          paletteBackground = generateLightHardBackground(palette.background);
          break;
        }
        case "medium": {
          paletteBackground = generateLightMediumBackground(palette.background);
          break;
        }
        case "soft": {
          paletteBackground = generateLightSoftBackground(palette.background);
          break;
        }
        default: {
          paletteBackground = generateLightMediumBackground(palette.background);
        }
      } // }}}
    }
  } else if (theme === "rusticated") {
    palette = RusticatedTheme;
    paletteForeground = generateLightForeground(palette.foreground);
    switch (configuration.lightContrast) {
      case "hard": {
        paletteBackground = generateLightHardBackground(palette.background);
        break;
      }
      case "medium": {
        paletteBackground = generateLightMediumBackground(palette.background);
        break;
      }
      case "soft": {
        paletteBackground = generateLightSoftBackground(palette.background);
        break;
      }
      default: {
        paletteBackground = generateLightMediumBackground(palette.background);
      }
    }
  }
  return generatePalette(paletteForeground, paletteBackground);
}

// vim: fdm=marker fmr={{{,}}}:
