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
    return new Promise((resolve, reject) => {
      fs.writeFile(path, JSON.stringify(data, null, 2), (err) =>
        err ? reject(err) : resolve("Success")
      );
    });
  }
  async generate(
    darkPath: string,
    lightPath: string,
    cosmicDarkPath: string,
    cosmicLightPath: string,
    rusticatedPath: string,
    neoDarkPath: string,
    neoLightPath: string,
    data: any
  ) {
    this.writeFile(darkPath, data.dark);
    this.writeFile(lightPath, data.light);
    this.writeFile(cosmicDarkPath, data.cosmicDark);
    this.writeFile(cosmicLightPath, data.cosmicLight);
    this.writeFile(rusticatedPath, data.rusticated);
    this.writeFile(neoDarkPath, data.neoDark);
    this.writeFile(neoLightPath, data.neoLight);
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
        name: "Rusticated",
        type: "light",
        semanticHighlighting: true,
        semanticTokenColors: getSemantic(configuration, "light", "rusticated"),
        colors: getWorkbench(configuration, "light", "rusticated"),
        tokenColors: getSyntax(configuration, "light", "rusticated"),
      },
      neoDark: {
        name: "Neo Stellarized Dark",
        type: "dark",
        semanticHighlighting: true,
        semanticTokenColors: getSemantic(configuration, "dark", "neo"),
        colors: getWorkbench(configuration, "dark", "neo"),
        tokenColors: getSyntax(configuration, "dark", "neo"),
      },
      neoLight: {
        name: "Neo Stellarized Light",
        type: "light",
        semanticHighlighting: true,
        semanticTokenColors: getSemantic(configuration, "light", "neo"),
        colors: getWorkbench(configuration, "light", "neo"),
        tokenColors: getSyntax(configuration, "light", "neo"),
      },
    };
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
  join(__dirname, "..", "..", "themes", "stellarized-dark.json"),
  join(__dirname, "..", "..", "themes", "stellarized-light.json"),
  join(__dirname, "..", "..", "themes", "cosmic-latte-dark.json"),
  join(__dirname, "..", "..", "themes", "cosmic-latte-light.json"),
  join(__dirname, "..", "..", "themes", "rusticated.json"),
  join(__dirname, "..", "..", "themes", "neo-stellarized-dark.json"),
  join(__dirname, "..", "..", "themes", "neo-stellarized-light.json"),
  utils.getThemeData(configuration)
);


