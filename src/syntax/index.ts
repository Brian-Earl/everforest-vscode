/*---------------------------------------------------------------------------------------------
 *  Homepage:   https://github.com/sainnhe/everforest-vscode
 *  Copyright:  2020 Sainnhe Park <i@sainnhe.dev>
 *  License:    MIT
 *--------------------------------------------------------------------------------------------*/

import { Configuration } from "../interface";
import { theme } from "../types/theme";
import { getDefaultSyntax } from "./default";

export function getSyntax(
  configuration: Configuration,
  theme: theme
) {
  return getDefaultSyntax(theme, configuration.italicComments);
}


