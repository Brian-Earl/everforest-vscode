/*---------------------------------------------------------------
 *  Homepage:   https://github.com/sainnhe/everforest-vscode
 *  Copyright:  2020 Sainnhe Park <i@sainnhe.dev>
 *  License:    MIT
 *--------------------------------------------------------------*/

import * as fs from "fs";
import { join } from "path";
import { window, commands } from "vscode";
import { getWorkbench } from "./workbench";
import { getSyntax } from "./syntax";
import { getSemantic } from "./semantic";
import { themes } from "./palette/themeList";
import { ThemeData } from "./types/themeData";

export default class Utils {

  getThemeData() {
    let themeData: Array<ThemeData> = []
    for (let i = 0; i < themes.length; i++) {
      let theme = themes[i]
      themeData.push({
        name: theme.name,
        type: theme.variant,
        output: theme.output,
        semanticHighlighting: true,
        semanticTokenColors: getSemantic(theme),
        colors: getWorkbench(theme),
        tokenColors: getSyntax(theme),
      })
    }
    return themeData
  }

  isNewlyInstalled(): boolean {
    const flagPath = join(__dirname, "..", ".flag");
    if (!fs.existsSync(flagPath)) {
      this.writeFile(flagPath, "");
      return true;
    } else {
      return false;
    }
  }

  private async writeFile(path: string, data: unknown) {
    return new Promise((resolve, reject) => {
      fs.writeFile(path, JSON.stringify(data, null, 2), (err) =>
        err ? reject(err) : resolve("Success")
      );
    });
  } 

  async generate(dir: string, themes: Array<ThemeData>) {
    for (let i = 0; i < themes.length; i++) {
      this.writeFile(join(dir, themes[i].output), themes[i])
    }
  }
}