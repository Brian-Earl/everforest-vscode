/*---------------------------------------------------------------------------------------------
 *  Homepage:   https://github.com/sainnhe/everforest-vscode
 *  Copyright:  2020 Sainnhe Park <i@sainnhe.dev>
 *  License:    MIT
 *--------------------------------------------------------------------------------------------*/

import { Configuration } from "../interface";
import { getPalette } from "../palette";
import { getDefaultSyntax } from "./default";

export function getSyntax(
  configuration: Configuration,
  variant: string,
  theme: string
) {
  const palette = getPalette(variant, theme);
  return getDefaultSyntax(palette, configuration.italicComments);
}


