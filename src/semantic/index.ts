/*---------------------------------------------------------------
 *  Homepage:   https://github.com/sainnhe/everforest-vscode
 *  Copyright:  2020 Sainnhe Park <i@sainnhe.dev>
 *  License:    MIT
 *--------------------------------------------------------------*/

import { getPalette } from "../palette";
import { ThemeSyntax } from "../types/syntax";
import { Theme } from "../types/theme";
import { getSemantic as getEverforestSemantic } from "./everforest";
import { getSemantic as getStellarizedSemantic } from "./stellarized";
import { getSemantic as getSimpleSemantic} from "./simple";

export function getSemantic(theme: Theme) {
  const palette = getPalette(theme);
  if (theme.syntax == ThemeSyntax.STELLARIZED) {
    return getStellarizedSemantic(palette)
  } else if (theme.syntax == ThemeSyntax.EVERFOREST) {
    return getEverforestSemantic(palette);
  }
  return getSimpleSemantic(palette);
}


