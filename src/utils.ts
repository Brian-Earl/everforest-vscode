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
    return {
      dark: {
        name: "Stellarized Dark",
        type: "dark",
        semanticHighlighting: true,
        semanticTokenColors: getSemantic(configuration, "dark", "stellarized"),
        colors: getWorkbench(configuration, "dark", "stellarized"),
        tokenColors: getSyntax(configuration, "dark", "stellarized"),
      },
      light: {
        name: "Stellarized Light",
        type: "light",
        semanticHighlighting: true,
        semanticTokenColors: getSemantic(configuration, "light", "stellarized"),
        colors: getWorkbench(configuration, "light", "stellarized"),
        tokenColors: getSyntax(configuration, "light", "stellarized"),
      },
      cosmicDark: {
        name: "Cosmic Latte Dark",
        type: "dark",
        semanticHighlighting: true,
        semanticTokenColors: getSemantic(configuration, "dark", "cosmic"),
        colors: getWorkbench(configuration, "dark", "cosmic"),
        tokenColors: getSyntax(configuration, "dark", "cosmic"),
      },
      cosmicLight: {
        name: "Cosmic Latte Light",
        type: "light",
        semanticHighlighting: true,
        semanticTokenColors: getSemantic(configuration, "light", "cosmic"),
        colors: getWorkbench(configuration, "light", "cosmic"),
        tokenColors: getSyntax(configuration, "light", "cosmic"),
      },
      rusticated: {
        name: "rusticated",
        type: "light",
        semanticHighlighting: true,
        semanticTokenColors: getSemantic(configuration, "light", "rusticated"),
        colors: getWorkbench(configuration, "light", "rusticated"),
        tokenColors: getSyntax(configuration, "light", "rusticated"),
      },
    };
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
    darkPath: string,
    lightPath: string,
    cosmicDarkPath: string,
    cosmicLightPath: string,
    rusticatedPath: string,
    data: any
  ) {
    this.writeFile(darkPath, data.dark).then(this.promptToReload);
    this.writeFile(lightPath, data.light);
    this.writeFile(cosmicLightPath, data.cosmicLight);
    this.writeFile(cosmicDarkPath, data.cosmicDark);
    this.writeFile(rusticatedPath, data.rusticated);
  } // }}}
}


