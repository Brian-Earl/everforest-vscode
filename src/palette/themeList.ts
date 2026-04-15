import { Theme } from "../types/theme";
import { CosmicLatteDarkTheme } from "./cosmicLatte/dark";
import { CosmicLatteLightTheme } from "./cosmicLatte/light";
import { RusticatedTheme } from "./rusticated/light";
import { SanctuaryInkVaultTheme } from "./sanctuary/inkVault";
import { SanctuaryBeachPaintingTheme } from "./sanctuary/beachPainting";
import { SanctuaryMorningSunTheme } from "./sanctuary/morningSun";
import { SanctuaryNightTheme } from "./sanctuary/night";
import { SanctuaryStargazingTheme } from "./sanctuary/stargazing";
import { SanctuaryTeaGardenTheme } from "./sanctuary/teaGarden";
import { StellarizedDarkTheme } from "./stellarized/dark";
import { StellarizedLightTheme } from "./stellarized/light";
import { OldBookTheme } from "./oldBook/light";
import { GrimoireTheme } from "./grimoire/light";
import { EverforestDarkTheme } from "./everforest/dark";
import { EverforestLightTheme } from "./everforest/light";
import { LunariaSoftLightTheme } from "./lunaria/soft";
import { LunariaVividLightTheme } from "./lunaria/vivid";
import { OilLightTheme } from "./oil/light";
import { KanagawaPaperCanvasTheme } from "./kanagawa-paper/canvas";
import { EvergardenSummerTheme } from "./evergarden/summer";
import { EvergardenSpringTheme } from "./evergarden/spring";
import { EvergardenFallTheme } from "./evergarden/fall";
import { EvergardenWinterTheme } from "./evergarden/winter";
import { EvergardenLunarTheme } from "./evergarden/lunar";
import { FogTheme } from "./fog/light";
import { AutumnizedTheme } from "./seasonized/autumnized";
import { SummerizedTheme } from "./seasonized/summerized";

export const themes: Array<Theme> = [
    {
        name: "Stellarized Dark",
        variant: "dark",
        output: "stellarized-dark.json",
        palette: StellarizedDarkTheme
    },
    {
        name: "Stellarized Light",
        variant: "light",
        output: "stellarized-light.json",
        palette: StellarizedLightTheme
    },
    {
        name: "Cosmic Latte Dark",
        variant: "dark",
        output: "cosmic-latte-dark.json",
        palette: CosmicLatteDarkTheme
    },
    {
        name: "Cosmic Latte Light",
        variant: "light",
        output: "cosmic-latte-light.json",
        palette: CosmicLatteLightTheme
    },
    {
        name: "Everforest Dark",
        variant: "dark",
        output: "everforest-dark.json",
        palette: EverforestDarkTheme
    },
    {
        name: "Everforest Light",
        variant: "light",
        output: "everforest-light.json",
        palette: EverforestLightTheme
    },
    {
        name: "Evergarden Spring",
        variant: "dark",
        output: "evergarden-spring.json",
        palette: EvergardenSpringTheme
    },
    {
        name: "Evergarden Summer",
        variant: "light",
        output: "evergarden-summer.json",
        palette: EvergardenSummerTheme
    },
    {
        name: "Evergarden Fall",
        variant: "dark",
        output: "evergarden-fall.json",
        palette: EvergardenFallTheme
    },
        {
        name: "Evergarden Winter",
        variant: "dark",
        output: "evergarden-winter.json",
        palette: EvergardenWinterTheme
    },
    {
        name: "Evergarden Lunar",
        variant: "dark",
        output: "evergarden-lunar.json",
        palette: EvergardenLunarTheme
    },
    {
        name: "Rusticated",
        variant: "light",
        output: "rusticated.json",
        palette: RusticatedTheme
    },
    {
        name: "Sanctuary Ink Vault",
        variant: "light",
        output: "sanctuary-ink-vault.json",
        palette: SanctuaryInkVaultTheme
    },
    {
        name: "Sanctuary Morning Sun",
        variant: "light",
        output: "sanctuary-morning-sun.json",
        palette: SanctuaryMorningSunTheme
    },
    {
        name: "Sanctuary Beach Painting",
        variant: "light",
        output: "sanctuary-beach-painting.json",
        palette: SanctuaryBeachPaintingTheme
    },
    {
        name: "Sanctuary Tea Garden",
        variant: "light",
        output: "sanctuary-tea-garden.json",
        palette: SanctuaryTeaGardenTheme
    },
    {
        name: "Night in the Sanctuary",
        variant: "dark",
        output: "sanctuary-night.json",
        palette: SanctuaryNightTheme
    },
    {
        name: "Stargazing in the Sanctuary",
        variant: "dark",
        output: "sanctuary-stargazing.json",
        palette: SanctuaryStargazingTheme
    },
    {
        name: "Old Book",
        variant: "light",
        output: "old-book.json",
        palette: OldBookTheme
    },
    {
        name: "Grimoire",
        variant: "light",
        output: "grimoire.json",
        palette: GrimoireTheme
    },
    {
        name: "Lunaria Soft Light",
        variant: "light",
        output: "lunaria-soft-light.json",
        palette: LunariaSoftLightTheme
    },
    {
        name: "Lunaria Vivid Light",
        variant: "light",
        output: "lunaria-vivid-light.json",
        palette: LunariaVividLightTheme
    },
    {
        name: "Oil Light",
        variant: "light",
        output: "oil-light.json",
        palette: OilLightTheme
    },
    {
        name: "Kanagawa Paper Canvas",
        variant: "light",
        output: "kanagawa-paper-canvas.json",
        palette: KanagawaPaperCanvasTheme
    },
    {
        name: "Fog",
        variant: "light",
        output: "fog.json",
        palette: FogTheme
    },
    {
        name: "Summerized",
        variant: "light",
        output: "summerized.json",
        palette: SummerizedTheme
    },
    {
        name: "Autumnized",
        variant: "light",
        output: "autumnized.json",
        palette: AutumnizedTheme
    }
]