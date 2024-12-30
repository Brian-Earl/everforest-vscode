/*---------------------------------------------------------------------------------------------
 *  Homepage:   https://github.com/sainnhe/everforest-vscode
 *  Copyright:  2020 Sainnhe Park <i@sainnhe.dev>
 *  License:    MIT
 *--------------------------------------------------------------------------------------------*/

import { Configuration, Palette } from "../interface";
import { DarkTheme } from "./dark";
import { LightTheme } from "./light";
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

export function getPalette(
  configuration: Configuration,
  variant: string
): Palette {
  let palette = DarkTheme;
  let paletteBackground: backgroundPalette = generateDarkMediumBackground(
    palette.background
  );
  let paletteForeground: foregroundPalette = generateDarkForeground(
    palette.foreground
  );
  if (variant === "dark") {
    palette = DarkTheme;
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
    palette = LightTheme;
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
  return generatePalette(paletteForeground, paletteBackground);
}

// vim: fdm=marker fmr={{{,}}}:
