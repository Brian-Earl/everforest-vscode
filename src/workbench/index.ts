/*---------------------------------------------------------------------------------------------
 *  Homepage:   https://github.com/sainnhe/everforest-vscode
 *  Copyright:  2020 Sainnhe Park <i@sainnhe.dev>
 *  License:    MIT
 *--------------------------------------------------------------------------------------------*/

import { Configuration, Palette } from "../interface";
import { getPalette } from "../palette";
import { highContrastWorkbench } from "./highContrast";

export function getWorkbench(
  configuration: Configuration,
  variant: string,
  theme: string
) {
  const palette: Palette = getPalette(variant, theme);
  return highContrastWorkbench(palette, configuration, variant);
}
