import { theme } from "../types/theme";
import { CosmicLatteDarkTheme } from "./cosmicLatte/dark";
import { CosmicLatteLightTheme } from "./cosmicLatte/light";
import { NeoStellarizedDarkTheme } from "./neoStellarized/dark";
import { NeoStellarizedLightTheme } from "./neoStellarized/light";
import { RusticatedTheme } from "./rusticated/light";
import { SanctuaryInkVaultTheme } from "./sanctuary/inkVault";
import { SanctuaryMorningSunTheme } from "./sanctuary/morningSun";
import { SanctuaryNightTheme } from "./sanctuary/night";
import { SanctuaryTeaGardenTheme } from "./sanctuary/teaGarden";
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
]