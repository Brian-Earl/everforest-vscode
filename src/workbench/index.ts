/*---------------------------------------------------------------------------------------------
 *  Homepage:   https://github.com/sainnhe/everforest-vscode
 *  Copyright:  2020 Sainnhe Park <i@sainnhe.dev>
 *  License:    MIT
 *--------------------------------------------------------------------------------------------*/

import { Configuration, Palette } from "../interface";
import { theme } from "../types/theme";
import { highContrastWorkbench } from "./highContrast";

export function getWorkbench(
  configuration: Configuration,
  theme: theme
) {
  return highContrastWorkbench(theme, configuration);
}
