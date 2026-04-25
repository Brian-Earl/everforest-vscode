import { Palette } from "../types/palette";

// Implementation of the syntax of stellarized and cosmic latte by haystackandroid
export function getSyntax(palette: Palette) {
  const syntax = [
    {
      name: "Keyword",
      scope:
        "keyword, storage.type.function, storage.type.class, storage.type.enum, storage.type.interface, storage.type.property, keyword.operator.new, keyword.operator.expression, keyword.operator.new, keyword.operator.delete, storage.type.extends",
      settings: {
        foreground: palette.green,
      },
    },
    {
      name: "Debug",
      scope: "keyword.other.debugger",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "Storage",
      scope:
        "storage, modifier, keyword.var, entity.name.tag, keyword.control.case, keyword.control.switch",
      settings: {
        foreground: palette.purple,
      },
    },
    {
      name: "Operator",
      scope: "keyword.operator",
      settings: {
        foreground: palette.green,
      },
    },
    {
      name: "String",
      scope: "string",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "String Delimiter",
      scope:
        "punctuation.definition.string.end, punctuation.definition.string.begin, punctuation.definition.string.template.begin, punctuation.definition.string.template.end",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "Attribute",
      scope: "entity.other.attribute-name",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "String Escape",
      scope:
        "constant.character.escape, punctuation.quasi.element, punctuation.definition.template-expression, punctuation.section.embedded, storage.type.format, constant.other.placeholder, constant.other.placeholder, variable.interpolation",
      settings: {
        foreground: palette.green,
      },
    },
    {
      name: "Function",
      scope:
        "entity.name.function, support.function, meta.function, meta.function-call, meta.definition.method",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "Preproc",
      scope:
        "keyword.control.at-rule, keyword.control.import, keyword.control.export, storage.type.namespace, punctuation.decorator, keyword.control.directive, keyword.preprocessor, punctuation.definition.preprocessor, punctuation.definition.directive, keyword.other.import, keyword.other.package, entity.name.type.namespace, entity.name.scope-resolution, keyword.other.using, keyword.package, keyword.import, keyword.map",
      settings: {
        foreground: palette.aqua,
      },
    },
    {
      name: "Annotation",
      scope: "storage.type.annotation",
      settings: {
        foreground: palette.aqua,
      },
    },
    {
      name: "Label",
      scope: "entity.name.label, constant.other.label",
      settings: {
        foreground: palette.green,
      },
    },
    {
      name: "Modules",
      scope:
        "support.module, support.node, support.other.module, support.type.object.module, entity.name.type.module, entity.name.type.class.module, keyword.control.module",
      settings: {
        foreground: palette.aqua,
      },
    },
    {
      name: "Type",
      scope: "storage.type, support.type, entity.name.type, keyword.type",
      settings: {
        foreground: palette.purple,
      },
    },
    {
      name: "Class",
      scope:
        "entity.name.type.class, support.class, entity.name.class, entity.other.inherited-class, storage.class",
      settings: {
        foreground: palette.purple,
      },
    },
    {
      name: "Number",
      scope: "constant.numeric",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "Boolean",
      scope: "constant.language.boolean",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "Macro",
      scope: "entity.name.function.preprocessor",
      settings: {
        foreground: palette.aqua,
      },
    },
    {
      name: "Special identifier",
      scope:
        "variable.language.this, variable.language.self, variable.language.super, keyword.other.this, variable.language.special, constant.language.null, constant.language.undefined, constant.language.nan",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "Constant",
      scope: "constant.language, support.constant",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "Identifier",
      scope: "variable, support.variable, meta.definition.variable",
      settings: {
        foreground: palette.fg,
      },
    },
    {
      name: "Property",
      scope:
        "variable.object.property, support.variable.property, variable.other.property, variable.other.object.property, variable.other.enummember, variable.other.member, meta.object-literal.key",
      settings: {
        foreground: palette.fg,
      },
    },
    {
      name: "Delimiter",
      scope: "punctuation, meta.brace, meta.delimiter, meta.bracket",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "Comment",
      scope: "comment, string.comment, punctuation.definition.comment",
      settings: {
        foreground: palette.grey1,
      },
    },
  ];
  return syntax;
}
