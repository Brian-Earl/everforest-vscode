import { getPalette } from "../palette";
import { Palette } from "../types/palette";
import { ThemeSyntax } from "../types/syntax";
import { Theme } from "../types/theme";
import { getSyntax as getEverforestSyntax } from "./everforest";
import { getSyntax as getStellarizedSyntax } from "./stellarized";
import { getSyntax as getSimpleSyntax } from "./simple";
import { getSyntax as getTonskySyntax } from "./tonsky";

export function getSyntax(theme: Theme) {
  const palette: Palette = getPalette(theme);
  if (theme.syntax == ThemeSyntax.STELLARIZED) {
    return getStellarizedSyntax(palette)
  } else if (theme.syntax == ThemeSyntax.EVERFOREST) {
    return getEverforestSyntax(palette);
  } else if (theme.syntax == ThemeSyntax.TONSKY) {
    return getTonskySyntax(palette);
  }
  return getSimpleSyntax(palette);
}


