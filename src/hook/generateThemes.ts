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
import { themes } from "../palette/themeList";

class Utils {
  private async writeFile(path: string, data: unknown) {
    return new Promise((resolve, reject) => {
      fs.writeFile(path, JSON.stringify(data, null, 2), (err) =>
        err ? reject(err) : resolve("Success")
      );
    });
  }
  async generate(
    dir: string,
    themes: Array<any>
  ) {
    for (let i = 0; i < themes.length; i++) {
      this.writeFile(join(dir, themes[i].output), themes[i])
    }
  }
  
  getThemeData(configuration: Configuration) {
    let themeData: Array<any> = []
    for (let i = 0; i < themes.length; i++) {
      let theme = themes[i]
      themeData.push({
        name: theme.name,
        type: theme.variant,
        output: theme.output,
        semanticHighlighting: true,
        semanticTokenColors: getSemantic(theme),
        colors: getWorkbench(configuration, theme),
        tokenColors: getSyntax(configuration, theme),
      })
    }
    return themeData
  }
}

const utils = new Utils();
const configuration: Configuration = {
  darkContrast: "medium",
  lightContrast: "medium",
  darkWorkbench: "high-contrast",
  lightWorkbench: "high-contrast",
  darkSelection: "grey",
  lightSelection: "grey",
  darkCursor: "white",
  lightCursor: "black",
  italicComments: true,
  diagnosticTextBackgroundOpacity: "0%",
  highContrast: false,
};

utils.generate(
  join(__dirname, "..", "..", "themes"),
  utils.getThemeData(configuration)
);


