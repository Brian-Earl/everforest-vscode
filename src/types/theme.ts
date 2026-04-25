import { ThemeSyntax } from "./syntax";
import { ThemeBasePalette } from "./themeBasePalette";
import { ThemeVariant } from "./themeVariant";

export type Theme = {
    name: string,
    variant: ThemeVariant,
    syntax: ThemeSyntax,
    output: string,
    palette: ThemeBasePalette,
};