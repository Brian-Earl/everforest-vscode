/*---------------------------------------------------------------
 *  Homepage:   https://github.com/sainnhe/everforest-vscode
 *  Copyright:  2020 Sainnhe Park <i@sainnhe.dev>
 *  License:    MIT
 *--------------------------------------------------------------*/

import * as fs from "fs";
import { join } from "path";
import { ConfigurationChangeEvent, workspace, window, commands } from "vscode";
import { Configuration } from "./interface";
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
  getConfiguration(): Configuration {
    const workspaceConfiguration = workspace.getConfiguration("stellarized");
    return {
      darkContrast: workspaceConfiguration.get<string>("darkContrast"),
      lightContrast: workspaceConfiguration.get<string>("lightContrast"),
      darkWorkbench: workspaceConfiguration.get<string>("darkWorkbench"),
      lightWorkbench: workspaceConfiguration.get<string>("lightWorkbench"),
      darkSelection: workspaceConfiguration.get<string>("darkSelection"),
      lightSelection: workspaceConfiguration.get<string>("lightSelection"),
      darkCursor: workspaceConfiguration.get<string>("darkCursor"),
      lightCursor: workspaceConfiguration.get<string>("lightCursor"),
      italicComments: workspaceConfiguration.get<boolean>("italicComments"),
      diagnosticTextBackgroundOpacity: workspaceConfiguration.get<string>(
        "diagnosticTextBackgroundOpacity"
      ),
      highContrast: workspaceConfiguration.get<boolean>("highContrast"),
    };
  }
  isDefaultConfiguration(configuration: Configuration): boolean {
    return (
      configuration.italicComments === true &&
      configuration.lightWorkbench === "material" &&
      configuration.darkWorkbench === "material" &&
      configuration.lightContrast === "medium" &&
      configuration.darkContrast === "medium" &&
      configuration.darkCursor === "white" &&
      configuration.lightCursor === "black" &&
      configuration.darkSelection === "grey" &&
      configuration.lightSelection === "grey" &&
      configuration.diagnosticTextBackgroundOpacity === "0%" &&
      configuration.highContrast === false
    );
  }
  getThemeData(configuration: Configuration) {
    let themeData: Array<themeData> = []
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
  } // }}}
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


