import { ThemeSyntax } from "./syntax";
import { ThemeVariant } from "./themeVariant";

export type ThemeData = {
  name: string;
  type: ThemeVariant;
  syntax: ThemeSyntax;
  output: string;
  semanticHighlighting: boolean;
  semanticTokenColors: any;
  colors: any;
  tokenColors: any;
};