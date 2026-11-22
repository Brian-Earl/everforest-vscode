import { Palette } from "../types/palette";

// Inspired by krueger71's crt-themes
export function getSyntax(palette: Palette) {
  const syntax = [
    {
      name: "Keywords",
      scope: "keyword, keyword.control, storage.type, storage.modifier",
      settings: {
        foreground: palette.fg,
        fontStyle: 'bold'
      },
    },
    {
      name: "Comment",
      scope: "comment, string.comment, punctuation.definition.comment",
      settings: {
        foreground: palette.fg,
        fontStyle: 'italic'
      },
    }
  ];
  return syntax;
}