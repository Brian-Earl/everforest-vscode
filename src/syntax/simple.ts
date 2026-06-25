import { Palette } from "../types/palette";

// Inspired by this article https://tonsky.me/blog/syntax-highlighting/
export function getSyntax(palette: Palette) {
  const syntax = [
    {
      name: "Keywords",
      scope: "keyword",
      settings: {
        foreground: palette.green,
      },
    },
    {
      name: "Constant, String",
      scope: "constant, support.constant, string",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "Types",
      scope: "entity.name.type",
      settings: {
        foreground: palette.purple,
      },
    },

    {
      name: "Punctuation, Delimiter, Operator",
      scope: "punctuation, meta.brace, meta.delimiter, meta.bracket, keyword.operator",
      settings: {
        foreground: palette.grey1,
      },
    },
    {
      name: "Comment",
      scope: "comment, string.comment, punctuation.definition.comment",
      settings: {
        foreground: palette.yellow,
      },
    }
  ];
  return syntax;
}