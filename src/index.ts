/*---------------------------------------------------------------
 *  Homepage:   https://github.com/sainnhe/stellarized-vscode
 *  Copyright:  2020 Sainnhe Park <i@sainnhe.dev>
 *  License:    MIT
 *--------------------------------------------------------------*/

import { join } from "path";
import Utils from "./utils";

export function activate() {
  const utils = new Utils();

  if (utils.isNewlyInstalled()) {
    utils.generate(
      join(__dirname, "..", "themes"),
      utils.getThemeData()
    );
  }
}

export function deactivate() {}