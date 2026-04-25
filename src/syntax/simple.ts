import { Palette } from "../types/palette";

// Inspired by this article https://tonsky.me/blog/syntax-highlighting/
export function getSyntax(palette: Palette) {
  const syntax = [
    {
      name: "Function",
      scope: "meta.definition.function, meta.definition.method",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "Constant, String",
      scope: `constant, constant.keyword, support.constant, constant.language.boolean, constant.numeric, constant.character, 
              string`,
      settings: {
        foreground: palette.green,
      },
    },
    {
      name: "Variable, Parameters",
      scope: "meta.definition.variable, variable.other.assignment, variable.other.constant, meta.parameters",
      settings: {
        foreground: palette.blue,
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