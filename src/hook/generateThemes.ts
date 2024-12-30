/*---------------------------------------------------------------------------------------------
 *  Homepage:   https://github.com/sainnhe/everforest-vscode
 *  Copyright:  2020 Sainnhe Park <i@sainnhe.dev>
 *  License:    MIT
 *--------------------------------------------------------------------------------------------*/

import * as fs from "fs";
import { join } from "path";
import { Configuration } from "../interface";
import { getWorkbench } from "../workbench";
import { getSyntax } from "../syntax";
import { getSemantic } from "../semantic";

class Utils {
  private async writeFile(path: string, data: unknown) {
    // {{{
    return new Promise((resolve, reject) => {
      fs.writeFile(path, JSON.stringify(data, null, 2), (err) =>
        err ? reject(err) : resolve("Success")
      );
    });
  } // }}}
  async generate(darkPath: string, lightPath: string, data: any) {
    // {{{
    this.writeFile(darkPath, data.dark);
    this.writeFile(lightPath, data.light);
  } // }}}
  getThemeData(configuration: Configuration) {
    // {{{
    return {
      dark: {
        name: "Stellarized Dark",
        type: "dark",
        semanticHighlighting: true,
        semanticTokenColors: getSemantic(configuration, "dark"),
        colors: getWorkbench(configuration, "dark"),
        tokenColors: getSyntax(configuration, "dark"),
      },
      light: {
        name: "Stellarized Light",
        type: "light",
        semanticHighlighting: true,
        semanticTokenColors: getSemantic(configuration, "light"),
        colors: getWorkbench(configuration, "light"),
        tokenColors: getSyntax(configuration, "light"),
      },
    };
  } // }}}
}

const utils = new Utils();
const configuration: Configuration = {
  darkContrast: "medium",
  lightContrast: "medium",
  darkWorkbench: "material",
  lightWorkbench: "material",
  darkSelection: "grey",
  lightSelection: "grey",
  darkCursor: "white",
  lightCursor: "black",
  italicKeywords: false,
  italicComments: true,
  diagnosticTextBackgroundOpacity: "0%",
  highContrast: false,
};

utils.generate(
  join(__dirname, "..", "..", "themes", "stellarized-dark.json"),
  join(__dirname, "..", "..", "themes", "stellarized-light.json"),
  utils.getThemeData(configuration)
);

// vim: fdm=marker fmr={{{,}}}:
