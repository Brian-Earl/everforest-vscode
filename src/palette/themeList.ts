import { Theme } from "../types/theme";
import { ThemeVariant } from "../types/themeVariant";
import { ThemeSyntax } from "../types/syntax";
import { CosmicLatteDarkTheme } from "./cosmicLatte/dark";
import { CosmicLatteLightTheme } from "./cosmicLatte/light";
import { RusticatedTheme } from "./rusticated/light";
import { SanctuaryInkVaultTheme } from "./sanctuary/inkVault";
import { SanctuaryMorningSunTheme } from "./sanctuary/morningSun";
import { SanctuaryNightTheme } from "./sanctuary/night";
import { SanctuaryStargazingTheme } from "./sanctuary/stargazing";
import { StellarizedDarkTheme } from "./stellarized/dark";
import { StellarizedLightTheme } from "./stellarized/light";
import { EverforestDarkTheme } from "./everforest/dark";
import { EverforestLightTheme } from "./everforest/light";
import { LunariaSoftLightTheme } from "./lunaria/soft";
import { LunariaVividLightTheme } from "./lunaria/vivid";
import { EvergardenSummerTheme } from "./evergarden/summer";
import { EvergardenSpringTheme } from "./evergarden/spring";
import { EvergardenFallTheme } from "./evergarden/fall";
import { EvergardenWinterTheme } from "./evergarden/winter";
import { EvergardenLunarTheme } from "./evergarden/lunar";
import { OliveCRTLightTheme } from "./oliveCRT/light";
import { OliveCRTDarkTheme } from "./oliveCRT/dark";
import { ScholarDarkTheme } from "./scholar/dark";
import { ScholarLightTheme } from "./scholar/light";
import { PetroglyphMorningTheme } from "./petroglyph/morning";
import { PetroglyphEveningTheme } from "./petroglyph/evening";
import { PetroglyphNightTheme } from "./petroglyph/night";
import { ThemeWorkbench } from "../types/workbench";

export const themes: Array<Theme> = [
    {
        name: "Stellarized Dark",
        variant: ThemeVariant.DARK,
        syntax: ThemeSyntax.STELLARIZED,
        workbench: ThemeWorkbench.CLASSIC,
        output: "stellarized-dark.json",
        palette: StellarizedDarkTheme
    },
    {
        name: "Stellarized Light",
        variant: ThemeVariant.LIGHT,
        syntax: ThemeSyntax.STELLARIZED,
        workbench: ThemeWorkbench.CLASSIC,
        output: "stellarized-light.json",
        palette: StellarizedLightTheme
    },
    {
        name: "Cosmic Latte Dark",
        variant: ThemeVariant.DARK,
        syntax: ThemeSyntax.STELLARIZED,
        workbench: ThemeWorkbench.CLASSIC,
        output: "cosmic-latte-dark.json",
        palette: CosmicLatteDarkTheme
    },
    {
        name: "Cosmic Latte Light",
        variant: ThemeVariant.LIGHT,
        syntax: ThemeSyntax.STELLARIZED,
        workbench: ThemeWorkbench.CLASSIC,
        output: "cosmic-latte-light.json",
        palette: CosmicLatteLightTheme
    },
    {
        name: "Everforest Dark",
        variant: ThemeVariant.DARK,
        syntax: ThemeSyntax.EVERFOREST,
        workbench: ThemeWorkbench.CLASSIC,
        output: "everforest-dark.json",
        palette: EverforestDarkTheme
    },
    {
        name: "Everforest Light",
        variant: ThemeVariant.LIGHT,
        syntax: ThemeSyntax.EVERFOREST,
        workbench: ThemeWorkbench.CLASSIC,
        output: "everforest-light.json",
        palette: EverforestLightTheme
    },
    {
        name: "Evergarden Spring",
        variant: ThemeVariant.DARK,
        syntax: ThemeSyntax.EVERFOREST,
        workbench: ThemeWorkbench.CLASSIC,
        output: "evergarden-spring.json",
        palette: EvergardenSpringTheme
    },
    {
        name: "Evergarden Summer",
        variant: ThemeVariant.LIGHT,
        syntax: ThemeSyntax.EVERFOREST,
        workbench: ThemeWorkbench.CLASSIC,
        output: "evergarden-summer.json",
        palette: EvergardenSummerTheme
    },
    {
        name: "Evergarden Fall",
        variant: ThemeVariant.DARK,
        syntax: ThemeSyntax.EVERFOREST,
        workbench: ThemeWorkbench.CLASSIC,
        output: "evergarden-fall.json",
        palette: EvergardenFallTheme
    },
    {
        name: "Evergarden Winter",
        variant: ThemeVariant.DARK,
        syntax: ThemeSyntax.EVERFOREST,
        workbench: ThemeWorkbench.CLASSIC,
        output: "evergarden-winter.json",
        palette: EvergardenWinterTheme
    },
    {
        name: "Evergarden Lunar",
        variant: ThemeVariant.DARK,
        syntax: ThemeSyntax.EVERFOREST,
        workbench: ThemeWorkbench.CLASSIC,
        output: "evergarden-lunar.json",
        palette: EvergardenLunarTheme
    },
    {
        name: "Petroglyph Morning",
        variant: ThemeVariant.LIGHT,
        syntax: ThemeSyntax.SIMPLE,
        workbench: ThemeWorkbench.MODERN,
        output: "petroglyph-morning.json",
        palette: PetroglyphMorningTheme
    },
    {
        name: "Petroglyph Evening",
        variant: ThemeVariant.LIGHT,
        syntax: ThemeSyntax.SIMPLE,
        workbench: ThemeWorkbench.MODERN,
        output: "petroglyph-evening.json",
        palette: PetroglyphEveningTheme
    },
    {
        name: "Petroglyph Night",
        variant: ThemeVariant.DARK,
        syntax: ThemeSyntax.SIMPLE,
        workbench: ThemeWorkbench.MODERN,
        output: "petroglyph-night.json",
        palette: PetroglyphNightTheme
    },
    {
        name: "Rusticated",
        variant: ThemeVariant.LIGHT,
        syntax: ThemeSyntax.STELLARIZED,
        workbench: ThemeWorkbench.CLASSIC,
        output: "rusticated.json",
        palette: RusticatedTheme
    },
    {
        name: "Sanctuary Ink Vault",
        variant: ThemeVariant.LIGHT,
        syntax: ThemeSyntax.EVERFOREST,
        workbench: ThemeWorkbench.CLASSIC,
        output: "sanctuary-ink-vault.json",
        palette: SanctuaryInkVaultTheme
    },
    {
        name: "Sanctuary Morning Sun",
        variant: ThemeVariant.LIGHT,
        syntax: ThemeSyntax.EVERFOREST,
        workbench: ThemeWorkbench.CLASSIC,
        output: "sanctuary-morning-sun.json",
        palette: SanctuaryMorningSunTheme
    },
    {
        name: "Night in the Sanctuary",
        variant: ThemeVariant.DARK,
        syntax: ThemeSyntax.EVERFOREST,
        workbench: ThemeWorkbench.CLASSIC,
        output: "sanctuary-night.json",
        palette: SanctuaryNightTheme
    },
    {
        name: "Stargazing in the Sanctuary",
        variant: ThemeVariant.DARK,
        syntax: ThemeSyntax.EVERFOREST,
        workbench: ThemeWorkbench.CLASSIC,
        output: "sanctuary-stargazing.json",
        palette: SanctuaryStargazingTheme
    },
    {
        name: "Lunaria Soft Light",
        variant: ThemeVariant.LIGHT,
        syntax: ThemeSyntax.STELLARIZED,
        workbench: ThemeWorkbench.CLASSIC,
        output: "lunaria-soft-light.json",
        palette: LunariaSoftLightTheme
    },
    {
        name: "Lunaria Vivid Light",
        variant: ThemeVariant.LIGHT,
        syntax: ThemeSyntax.STELLARIZED,
        workbench: ThemeWorkbench.CLASSIC,
        output: "lunaria-vivid-light.json",
        palette: LunariaVividLightTheme
    },
    {
        name: "Stellarized Dark (Simple)",
        variant: ThemeVariant.DARK,
        syntax: ThemeSyntax.SIMPLE,
        workbench: ThemeWorkbench.CLASSIC,
        output: "stellarized-dark-simple.json",
        palette: StellarizedDarkTheme
    },
    {
        name: "Stellarized Light (Simple)",
        variant: ThemeVariant.LIGHT,
        syntax: ThemeSyntax.SIMPLE,
        workbench: ThemeWorkbench.CLASSIC,
        output: "stellarized-light-simple.json",
        palette: StellarizedLightTheme
    },
    {
        name: "Everforest Light (Simple)",
        variant: ThemeVariant.LIGHT,
        syntax: ThemeSyntax.SIMPLE,
        workbench: ThemeWorkbench.CLASSIC,
        output: "everforest-light-simple.json",
        palette: EverforestLightTheme
    },
    {
        name: "Everforest Dark (Simple)",
        variant: ThemeVariant.DARK,
        syntax: ThemeSyntax.SIMPLE,
        workbench: ThemeWorkbench.CLASSIC,
        output: "everforest-dark-simple.json",
        palette: EverforestDarkTheme
    },
    {
        name: "Olive CRT Dark",
        variant: ThemeVariant.DARK,
        syntax: ThemeSyntax.EVERFOREST,
        workbench: ThemeWorkbench.CLASSIC,
        output: "olive-crt-dark.json",
        palette: OliveCRTDarkTheme
    },
    {
        name: "Olive CRT Light",
        variant: ThemeVariant.LIGHT,
        syntax: ThemeSyntax.EVERFOREST,
        workbench: ThemeWorkbench.CLASSIC,
        output: "olive-crt-light.json",
        palette: OliveCRTLightTheme
    },
    {
        name: "Scholar Dark",
        variant: ThemeVariant.DARK,
        syntax: ThemeSyntax.EVERFOREST,
        workbench: ThemeWorkbench.CLASSIC,
        output: "scholar-dark.json",
        palette: ScholarDarkTheme
    },
    {
        name: "Scholar Light",
        variant: ThemeVariant.LIGHT,
        syntax: ThemeSyntax.EVERFOREST,
        workbench: ThemeWorkbench.CLASSIC,
        output: "scholar-light.json",
        palette: ScholarLightTheme
    }
]