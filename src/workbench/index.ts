/*---------------------------------------------------------------------------------------------
 *  Homepage:   https://github.com/sainnhe/everforest-vscode
 *  Copyright:  2020 Sainnhe Park <i@sainnhe.dev>
 *  License:    MIT
 *--------------------------------------------------------------------------------------------*/

import { Configuration, Palette } from "../interface";
import { getPalette } from "../palette";
import { flatWorkbench } from "./flat";
import { highContrastWorkbench } from "./highContrast";
import { materialWorkbench } from "./material";

export function getWorkbench(
  configuration: Configuration,
  variant: string,
  theme: string
) {
  const palette: Palette = getPalette(configuration, variant, theme);
  if (variant === "dark") {
    switch (configuration.darkWorkbench) {
      case "material":
        return materialWorkbench(palette, configuration, "dark");
      case "flat":
        return flatWorkbench(palette, configuration, "dark");
      case "high-contrast":
        return highContrastWorkbench(palette, configuration, "dark");
      default:
        return materialWorkbench(palette, configuration, "dark");
    }
  } else {
    switch (configuration.lightWorkbench) {
      case "material":
        return materialWorkbench(palette, configuration, "light");
      case "flat":
        return flatWorkbench(palette, configuration, "light");
      case "high-contrast":
        return highContrastWorkbench(palette, configuration, "light");
      default:
        return materialWorkbench(palette, configuration, "light");
    }
  }
}

// vim: fdm=marker fmr={{{,}}}:
