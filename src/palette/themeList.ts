import { theme } from "../types/theme";
import { CosmicLatteDarkTheme } from "./cosmicLatte/dark";
import { CosmicLatteLightTheme } from "./cosmicLatte/light";
import { NeoStellarizedDarkTheme } from "./neoStellarized/dark";
import { NeoStellarizedLightTheme } from "./neoStellarized/light";
import { RusticatedTheme } from "./rusticated/light";
import { StellarizedDarkTheme } from "./stellarized/dark";
import { StellarizedLightTheme } from "./stellarized/light";

export const themes: Array<theme> = [
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
        name: "Rusticated",
        variant: "light",
        output: "rusticated.json",
        palette: RusticatedTheme
    },
    {
        name: "Neo Stellarized Dark",
        variant: "dark",
        output: "neo-stellarized-dark.json",
        palette: NeoStellarizedDarkTheme
    },
    {
        name: "Neo Stellarized Light",
        variant: "light",
        output: "neo-stellarized-light.json",
        palette: NeoStellarizedLightTheme
    },
]