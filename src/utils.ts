/*---------------------------------------------------------------
 *  Homepage:   https://github.com/sainnhe/everforest-vscode
 *  Copyright:  2020 Sainnhe Park <i@sainnhe.dev>
 *  License:    MIT
 *--------------------------------------------------------------*/

import * as fs from "fs";
import { join } from "path";
import { ConfigurationChangeEvent, window, commands } from "vscode";
import { getWorkbench } from "./workbench";
import { getSyntax } from "./syntax";
import { getSemantic } from "./semantic";
import { themes } from "./palette/themeList";
import { themeData } from "./types/themeData";

export default class Utils {
  detectConfigChanges(
    event: ConfigurationChangeEvent,
    onConfigChange: () => void
  ): void {
    if (event.affectsConfiguration("stellarized")) {
      onConfigChange();
    }
  }
  getThemeData() {
    let themeData: Array<themeData> = []
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
  private promptToReload() {
    const action = "Reload";
    window
      .showInformationMessage("Reload required.", action)
      .then((selectedAction) => {
        if (selectedAction === action) {
          commands.executeCommand("workbench.action.reloadWindow");
        }
      });
  }
  async generate(
    dir: string,
    themes: Array<themeData>
  ) {
    for (let i = 0; i < themes.length; i++) {
      this.writeFile(join(dir, themes[i].output), themes[i])
      if (i == 0) this.promptToReload
    }
  }
}


