/*---------------------------------------------------------------
 *  Homepage:   https://github.com/sainnhe/everforest-vscode
 *  Copyright:  2020 Sainnhe Park <i@sainnhe.dev>
 *  License:    MIT
 *--------------------------------------------------------------*/

import { Palette } from "../types/palette";

export function getSemantic(palette: Palette) {
  return {
    // General 
    operatorOverload: `${palette.yellow}`,
    memberOperatorOverload: `${palette.yellow}`,
    
    // JavaScript 
    "variable.defaultLibrary:javascript": `${palette.blue}`,
    "property.defaultLibrary:javascript": `${palette.blue}`,
    
    // JavaScript React 
    "variable.defaultLibrary:javascriptreact": `${palette.blue}`,
    "property.defaultLibrary:javascriptreact": `${palette.blue}`,
    
    // TypeScript 
    "class:typescript": `${palette.green}`,
    "interface:typescript": `${palette.green}`,
    "enum:typescript": `${palette.green}`,
    "enumMember:typescript": `${palette.blue}`,
    "namespace:typescript": `${palette.aqua}`,
    "variable.defaultLibrary:typescript": `${palette.blue}`,
    "property.defaultLibrary:typescript": `${palette.blue}`,
    
    // TypeScript React 
    "class:typescriptreact": `${palette.green}`,
    "interface:typescriptreact": `${palette.green}`,
    "enum:typescriptreact": `${palette.green}`,
    "enumMember:typescriptreact": `${palette.blue}`,
    "namespace:typescriptreact": `${palette.aqua}`,
    "variable.defaultLibrary:typescriptreact": `${palette.blue}`,
    "property.defaultLibrary:typescriptreact": `${palette.blue}`,
    
    // Python 
    "intrinsic:python": `${palette.purple}`,
    "module:python": `${palette.aqua}`,
    "class:python": `${palette.purple}`,
    
    // Rust 
    "macro:rust": `${palette.aqua}`,
    "namespace:rust": `${palette.aqua}`,
    "selfKeyword:rust": `${palette.aqua}`,
  };
}


