import { ThemeSyntax } from "./syntax";
import { ThemeBasePalette } from "./themeBasePalette";
import { ThemeVariant } from "./themeVariant";
import { ThemeWorkbench } from "./workbench";

export type Theme = {
    name: string,
    variant: ThemeVariant,
    syntax: ThemeSyntax,
    workbench: ThemeWorkbench
    output: string,
    palette: ThemeBasePalette,
};