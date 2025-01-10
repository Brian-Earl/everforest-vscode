/*---------------------------------------------------------------------------------------------
 *  Homepage:   https://github.com/sainnhe/everforest-vscode
 *  Copyright:  2020 Sainnhe Park <i@sainnhe.dev>
 *  License:    MIT
 *--------------------------------------------------------------------------------------------*/

import { Palette, Configuration } from "../interface";
import { getPalette } from "../palette";
import { theme } from "../types/theme";

export function highContrastWorkbench(
  theme: theme,
  configuration: Configuration
) {
  let selectionBg: string;
  let editorSelectionBg: string;
  let editorSelectionBgHl: string;
  let cursorFg: string;
  let diagnosticTextBackgroundOpacity: string;
  let palette: Palette = getPalette(theme)
  let variant: string = theme.variant;
  if (variant === "dark") {
    switch (
      configuration.darkSelection
    ) {
      case "grey": {
        selectionBg = `${palette.ui2}e0`;
        editorSelectionBg = `${palette.ui2}c0`;
        editorSelectionBgHl = `${palette.ui2}60`;
        break;
      }
      case "red": {
        selectionBg = `${palette.dimRed}60`;
        editorSelectionBg = `${palette.dimRed}40`;
        editorSelectionBgHl = `${palette.dimRed}20`;
        break;
      }
      case "orange": {
        selectionBg = `${palette.dimOrange}60`;
        editorSelectionBg = `${palette.dimOrange}40`;
        editorSelectionBgHl = `${palette.dimOrange}20`;
        break;
      }
      case "yellow": {
        selectionBg = `${palette.dimYellow}60`;
        editorSelectionBg = `${palette.dimYellow}40`;
        editorSelectionBgHl = `${palette.dimYellow}20`;
        break;
      }
      case "green": {
        selectionBg = `${palette.dimGreen}60`;
        editorSelectionBg = `${palette.dimGreen}40`;
        editorSelectionBgHl = `${palette.dimGreen}20`;
        break;
      }
      case "aqua": {
        selectionBg = `${palette.dimAqua}60`;
        editorSelectionBg = `${palette.dimAqua}40`;
        editorSelectionBgHl = `${palette.dimAqua}20`;
        break;
      }
      case "blue": {
        selectionBg = `${palette.dimBlue}60`;
        editorSelectionBg = `${palette.dimBlue}40`;
        editorSelectionBgHl = `${palette.dimBlue}20`;
        break;
      }
      case "purple": {
        selectionBg = `${palette.dimPurple}60`;
        editorSelectionBg = `${palette.dimPurple}40`;
        editorSelectionBgHl = `${palette.dimPurple}20`;
        break;
      }
      default: {
        selectionBg = `${palette.ui2}e0`;
        editorSelectionBg = `${palette.ui2}c0`;
        editorSelectionBgHl = `${palette.ui2}60`;
      }
    } // }}}
    switch (
      configuration.darkCursor
    ) {
      case "white": {
        cursorFg = `${palette.tx}`;
        break;
      }
      case "red": {
        cursorFg = `${palette.red}`;
        break;
      }
      case "orange": {
        cursorFg = `${palette.orange}`;
        break;
      }
      case "yellow": {
        cursorFg = `${palette.yellow}`;
        break;
      }
      case "green": {
        cursorFg = `${palette.green}`;
        break;
      }
      case "aqua": {
        cursorFg = `${palette.aqua}`;
        break;
      }
      case "blue": {
        cursorFg = `${palette.blue}`;
        break;
      }
      case "purple": {
        cursorFg = `${palette.purple}`;
        break;
      }
      default: {
        cursorFg = `${palette.tx}`;
      }
    }
  } else {
    selectionBg = `${palette.ui2}c0`;
    editorSelectionBg = `${palette.ui2}a0`;
    editorSelectionBgHl = `${palette.ui2}50`;
    cursorFg = `${palette.tx}`;
  }

  diagnosticTextBackgroundOpacity = "00";

  const tokens = {
    foreground: `${palette.tx}`,
    focusBorder: `${palette.bg}00`,
    "widget.shadow": `${palette.shadow}`,
    "selection.background": `${selectionBg}`,
    descriptionForeground: `${palette.tx3}`,
    errorForeground: `${palette.red}`,
    "icon.foreground": `${palette.aqua}`,
    "textLink.foreground": `${palette.green}`,
    "textLink.activeForeground": `${palette.green}c0`,
    "textCodeBlock.background": `${palette.bg2}`,
    "textBlockQuote.background": `${palette.bg2}`,
    "textBlockQuote.border": `${palette.ui2}`,
    "textPreformat.foreground": `${palette.yellow}`,
    "toolbar.hoverBackground": `${palette.bg2}`,
    "button.background": `${palette.badge}`,
    "button.hoverBackground": `${palette.badge}d0`,
    "button.foreground": `${palette.bg}`,
    "button.secondaryBackground": `${palette.ui}`,
    "button.secondaryForeground": `${palette.tx}`,
    "button.secondaryHoverBackground": `${palette.ui2}`,
    "checkbox.background": `${palette.bg}`,
    "checkbox.foreground": `${palette.orange}`,
    "checkbox.border": `${palette.ui}`,
    "dropdown.border": `${palette.ui}`,
    "dropdown.background": `${palette.bg}`,
    "dropdown.foreground": `${palette.tx2}`,
    "input.border": `${palette.ui}`,
    "input.background": `${palette.bg}00`,
    "input.foreground": `${palette.tx}`,
    "input.placeholderForeground": `${palette.tx3}`,
    "inputOption.activeBorder": `${palette.aqua}`,
    "inputValidation.errorBorder": `${palette.red}`,
    "inputValidation.errorBackground": `${palette.dimRed}`,
    "inputValidation.errorForeground": `${palette.tx}`,
    "inputValidation.infoBorder": `${palette.blue}`,
    "inputValidation.infoBackground": `${palette.dimBlue}`,
    "inputValidation.infoForeground": `${palette.tx}`,
    "inputValidation.warningBorder": `${palette.yellow}`,
    "inputValidation.warningBackground": `${palette.dimYellow}`,
    "inputValidation.warningForeground": `${palette.tx}`,
    "scrollbar.shadow": `${palette.shadow}`,
    "scrollbarSlider.activeBackground": `${palette.tx2}`,
    "scrollbarSlider.hoverBackground": `${palette.ui3}`,
    "scrollbarSlider.background": `${palette.ui3}80`,
    "badge.background": `${palette.badge}`,
    "badge.foreground": `${palette.bg}`,
    "progressBar.background": `${palette.badge}`,
    "list.activeSelectionForeground": `${palette.tx}`,
    "list.activeSelectionBackground": `${palette.ui}80`,
    "list.inactiveSelectionForeground": `${palette.tx2}`,
    "list.inactiveSelectionBackground": `${palette.ui}80`,
    "list.dropBackground": `${palette.bg2}80`,
    "list.focusForeground": `${palette.tx}`,
    "list.focusBackground": `${palette.ui}80`,
    "list.inactiveFocusBackground": `${palette.ui}80`,
    "list.highlightForeground": `${palette.green}`,
    "list.hoverForeground": `${palette.tx}`,
    "list.hoverBackground": `${palette.bg}00`,
    "list.invalidItemForeground": `${palette.dimRed}`,
    "list.errorForeground": `${palette.red}`,
    "list.warningForeground": `${palette.yellow}`,
    "tree.indentGuidesStroke": `${palette.tx3}`,
    "activityBar.border": `${palette.ui}`,
    "activityBar.background": `${palette.bg2}`,
    "activityBar.foreground": `${palette.tx}`,
    "activityBar.inactiveForeground": `${palette.tx3}`,
    "activityBar.dropBackground": `${palette.bg}`,
    "activityBar.activeBorder": `${palette.badge}d0`,
    "activityBar.activeFocusBorder": `${palette.badge}`,
    "activityBarBadge.background": `${palette.badge}`,
    "activityBarBadge.foreground": `${palette.bg}`,
    "sideBar.foreground": `${palette.tx3}`,
    "sideBar.background": `${palette.bg2}`,
    "sideBar.border": `${palette.ui}`,
    "sideBarSectionHeader.background": `${palette.bg}00`,
    "sideBarTitle.foreground": `${palette.tx2}`,
    "sideBarSectionHeader.foreground": `${palette.tx2}`,
    "minimap.findMatchHighlight": `${palette.dimAqua}60`,
    "minimap.selectionHighlight": `${palette.ui3}f0`,
    "minimap.errorHighlight": `${palette.dimRed}80`,
    "minimap.warningHighlight": `${palette.dimYellow}80`,
    "minimapGutter.addedBackground": `${palette.dimGreen}a0`,
    "minimapGutter.modifiedBackground": `${palette.dimBlue}a0`,
    "minimapGutter.deletedBackground": `${palette.dimRed}a0`,
    "editorGroup.border": `${palette.ui}`,
    "editorGroupHeader.tabsBackground": `${palette.bg}`,
    "editorGroupHeader.noTabsBackground": `${palette.bg}`,
    "editorGroup.dropBackground": `${palette.ui3}60`,
    "tab.border": `${palette.ui}`,
    "tab.activeBorder": `${palette.badge}`,
    "tab.inactiveBackground": `${palette.bg}`,
    "tab.hoverBackground": `${palette.bg}`,
    "tab.hoverForeground": `${palette.tx}`,
    "tab.activeBackground": `${palette.bg}`,
    "tab.activeForeground": `${palette.tx}`,
    "tab.inactiveForeground": `${palette.tx3}`,
    "tab.unfocusedActiveForeground": `${palette.tx2}`,
    "tab.unfocusedActiveBorder": `${palette.tx3}`,
    "tab.unfocusedInactiveForeground": `${palette.tx3}`,
    "tab.unfocusedHoverForeground": `${palette.tx}`,
    "tab.lastPinnedBorder": `${palette.badge}`,
    "editor.background": `${palette.bg}`,
    "editor.foreground": `${palette.tx}`,
    "editorLineNumber.foreground": `${palette.tx3}a0`,
    "editorLineNumber.activeForeground": `${palette.tx2}e0`,
    "editorCursor.foreground": `${cursorFg}`,
    "editor.selectionBackground": `${editorSelectionBg}`,
    "editor.selectionHighlightBackground": `${editorSelectionBgHl}`,
    "editor.inactiveSelectionBackground": `${editorSelectionBgHl}`,
    "editor.wordHighlightBackground":
      variant === "dark" ? `${palette.ui2}58` : `${palette.ui2}48`,
    "editor.wordHighlightStrongBackground":
      variant === "dark" ? `${palette.ui2}b0` : `${palette.ui2}90`,
    "editor.hoverHighlightBackground":
      variant === "dark" ? `${palette.ui2}b0` : `${palette.ui2}90`,
    "editor.findMatchBackground": `${palette.dimOrange}40`,
    "editor.findMatchHighlightBackground": `${palette.dimYellow}40`,
    "editor.findRangeHighlightBackground": `${editorSelectionBgHl}`,
    "editor.lineHighlightBorder": `${palette.ui3}00`,
    "editor.lineHighlightBackground":
      variant === "dark" ? `${palette.ui}90` : `${palette.ui}70`,
    "editor.rangeHighlightBackground": `${palette.ui}80`,
    "editor.symbolHighlightBackground": `${palette.dimBlue}40`,
    "editorLink.activeForeground": `${palette.green}`,
    "editorWhitespace.foreground": `${palette.ui2}`,
    "editorIndentGuide.background": `${palette.tx2}20`,
    "editorIndentGuide.activeBackground": `${palette.tx2}50`,
    "editorInlayHint.background": `${palette.bg}00`,
    "editorInlayHint.foreground": `${palette.tx3}a0`,
    "editorInlayHint.typeBackground": `${palette.bg}00`,
    "editorInlayHint.typeForeground": `${palette.tx3}a0`,
    "editorInlayHint.parameterBackground": `${palette.bg}00`,
    "editorInlayHint.parameterForeground": `${palette.tx3}a0`,
    "editorRuler.foreground": `${palette.ui2}a0`,
    "editorCodeLens.foreground": `${palette.tx3}a0`,
    "editor.foldBackground": `${palette.ui3}80`,
    "editorBracketMatch.border": `${palette.ui}00`,
    "editorBracketMatch.background": `${palette.ui3}`,
    "editorBracketHighlight.foreground1": `${palette.red}`,
    "editorBracketHighlight.foreground2": `${palette.yellow}`,
    "editorBracketHighlight.foreground3": `${palette.green}`,
    "editorBracketHighlight.foreground4": `${palette.blue}`,
    "editorBracketHighlight.foreground5": `${palette.orange}`,
    "editorBracketHighlight.foreground6": `${palette.purple}`,
    "editorBracketHighlight.unexpectedBracket.foreground": `${palette.tx3}`,
    "editorOverviewRuler.border": `${palette.ui}00`,
    "editorOverviewRuler.findMatchForeground": `${palette.dimAqua}`,
    "editorOverviewRuler.rangeHighlightForeground": `${palette.dimAqua}`,
    "editorOverviewRuler.selectionHighlightForeground": `${palette.dimAqua}`,
    "editorOverviewRuler.wordHighlightForeground": `${palette.ui3}`,
    "editorOverviewRuler.wordHighlightStrongForeground": `${palette.ui3}`,
    "editorOverviewRuler.modifiedForeground": `${palette.dimBlue}a0`,
    "editorOverviewRuler.addedForeground": `${palette.dimGreen}a0`,
    "editorOverviewRuler.deletedForeground": `${palette.dimRed}a0`,
    "editorOverviewRuler.errorForeground": `${palette.red}`,
    "editorOverviewRuler.warningForeground": `${palette.yellow}`,
    "editorOverviewRuler.infoForeground": `${palette.purple}`,
    "editorOverviewRuler.currentContentForeground": `${palette.dimBlue}`,
    "editorOverviewRuler.incomingContentForeground": `${palette.dimAqua}`,
    "editorOverviewRuler.commonContentForeground": `${palette.tx3}`,
    "problemsErrorIcon.foreground": `${palette.red}`,
    "problemsWarningIcon.foreground": `${palette.yellow}`,
    "problemsInfoIcon.foreground": `${palette.blue}`,
    "editorUnnecessaryCode.border": `${palette.ui}`,
    "editorUnnecessaryCode.opacity": `#00000080`,
    "editorError.foreground": `${palette.dimRed}`,
    "editorWarning.foreground": `${palette.dimYellow}`,
    "editorInfo.foreground": `${palette.dimBlue}`,
    "editorHint.foreground": `${palette.dimPurple}`,
    "editorError.background": `${palette.dimRed}${diagnosticTextBackgroundOpacity}`,
    "editorWarning.background": `${palette.dimYellow}${diagnosticTextBackgroundOpacity}`,
    "editorInfo.background": `${palette.dimBlue}${diagnosticTextBackgroundOpacity}`,
    "editorGutter.background": `${palette.bg}00`,
    "editorGutter.modifiedBackground": `${palette.dimBlue}a0`,
    "editorGutter.addedBackground": `${palette.dimGreen}a0`,
    "editorGutter.deletedBackground": `${palette.dimRed}a0`,
    "editorGutter.commentRangeForeground": `${palette.tx3}`,
    "diffEditor.insertedTextBackground": `${palette.dimAqua}30`,
    "diffEditor.removedTextBackground": `${palette.dimRed}30`,
    "diffEditor.diagonalFill": `${palette.ui3}`,
    "editorSuggestWidget.background": `${palette.ui}`,
    "editorSuggestWidget.foreground": `${palette.tx}`,
    "editorSuggestWidget.highlightForeground": `${palette.green}`,
    "editorSuggestWidget.selectedBackground": `${palette.ui2}`,
    "editorSuggestWidget.border": `${palette.ui}`,
    "editorWidget.background": `${palette.bg}`,
    "editorWidget.foreground": `${palette.tx}`,
    "editorWidget.border": `${palette.ui}`,
    "editorHoverWidget.background": `${palette.bg2}`,
    "editorHoverWidget.border": `${palette.ui}`,
    "editorGhostText.background": `${palette.bg}00`,
    "editorGhostText.foreground": `${palette.tx3}a0`,
    "editorMarkerNavigation.background": `${palette.bg2}`,
    "editorMarkerNavigationError.background": `${palette.dimRed}80`,
    "editorMarkerNavigationWarning.background": `${palette.dimYellow}80`,
    "editorMarkerNavigationInfo.background": `${palette.dimBlue}80`,
    "peekView.border": `${palette.ui}`,
    "peekViewEditor.background": `${palette.bg2}`,
    "peekViewEditor.matchHighlightBackground": `${palette.dimYellow}50`,
    "peekViewEditorGutter.background": `${palette.bg2}`,
    "peekViewResult.fileForeground": `${palette.tx}`,
    "peekViewResult.lineForeground": `${palette.tx2}`,
    "peekViewResult.matchHighlightBackground": `${palette.dimYellow}50`,
    "peekViewResult.selectionBackground": `${palette.dimAqua}50`,
    "peekViewResult.selectionForeground": `${palette.tx}`,
    "peekViewTitleDescription.foreground": `${palette.tx}`,
    "peekViewTitleLabel.foreground": `${palette.green}`,
    "peekViewResult.background": `${palette.bg2}`,
    "peekViewTitle.background": `${palette.ui2}`,
    "pickerGroup.border": `${palette.badge}1a`,
    "terminal.foreground": `${palette.tx}`,
    "terminal.border": `${palette.ui}`,
    "terminalCursor.foreground": `${cursorFg}`,
    "terminal.ansiBlack":
      variant === "dark" ? `${palette.bg2}` : `${palette.tx}`,
    "terminal.ansiBlue": `${palette.blue}`,
    "terminal.ansiBrightBlack":
      variant === "dark" ? `${palette.tx3}` : `${palette.tx}`,
    "terminal.ansiBrightBlue": `${palette.blue}`,
    "terminal.ansiBrightCyan": `${palette.aqua}`,
    "terminal.ansiBrightGreen": `${palette.green}`,
    "terminal.ansiBrightMagenta": `${palette.purple}`,
    "terminal.ansiBrightRed": `${palette.red}`,
    "terminal.ansiBrightWhite":
      variant === "dark" ? `${palette.tx}` : `${palette.bg2}`,
    "terminal.ansiBrightYellow": `${palette.yellow}`,
    "terminal.ansiCyan": `${palette.aqua}`,
    "terminal.ansiGreen": `${palette.green}`,
    "terminal.ansiMagenta": `${palette.purple}`,
    "terminal.ansiRed": `${palette.red}`,
    "terminal.ansiWhite":
      variant === "dark" ? `${palette.tx}` : `${palette.tx3}`,
    "terminal.ansiYellow": `${palette.yellow}`,
    "debugToolBar.background": `${palette.bg}`,
    "debugTokenExpression.name": `${palette.blue}`,
    "debugTokenExpression.value": `${palette.green}`,
    "debugTokenExpression.string": `${palette.yellow}`,
    "debugTokenExpression.boolean": `${palette.purple}`,
    "debugTokenExpression.number": `${palette.purple}`,
    "debugTokenExpression.error": `${palette.red}`,
    "debugIcon.breakpointForeground": `${palette.red}`,
    "debugIcon.breakpointDisabledForeground": `${palette.dimRed}`,
    "debugIcon.breakpointUnverifiedForeground": `${palette.tx2}`,
    "debugIcon.breakpointCurrentStackframeForeground": `${palette.blue}`,
    "debugIcon.breakpointStackframeForeground": `${palette.red}`,
    "debugIcon.startForeground": `${palette.aqua}`,
    "debugIcon.pauseForeground": `${palette.yellow}`,
    "debugIcon.stopForeground": `${palette.red}`,
    "debugIcon.disconnectForeground": `${palette.purple}`,
    "debugIcon.restartForeground": `${palette.aqua}`,
    "debugIcon.stepOverForeground": `${palette.blue}`,
    "debugIcon.stepIntoForeground": `${palette.blue}`,
    "debugIcon.stepOutForeground": `${palette.blue}`,
    "debugIcon.continueForeground": `${palette.blue}`,
    "debugIcon.stepBackForeground": `${palette.blue}`,
    "debugConsole.infoForeground": `${palette.green}`,
    "debugConsole.warningForeground": `${palette.yellow}`,
    "debugConsole.errorForeground": `${palette.red}`,
    "debugConsole.sourceForeground": `${palette.purple}`,
    "debugConsoleInputIcon.foreground": `${palette.aqua}`,
    "merge.incomingHeaderBackground": `${palette.dimAqua}80`,
    "merge.incomingContentBackground": `${palette.dimAqua}40`,
    "merge.currentHeaderBackground": `${palette.dimBlue}80`,
    "merge.currentContentBackground": `${palette.dimBlue}40`,
    "merge.border": `${palette.ui}00`,
    "panel.background": `${palette.bg2}`,
    "panel.border": `${palette.ui}`,
    "panelInput.border": `${palette.ui}`,
    "panelTitle.activeForeground": `${palette.tx}`,
    "panelTitle.activeBorder": `${palette.badge}d0`,
    "panelTitle.inactiveForeground": `${palette.tx3}`,
    "panelSection.border": `${palette.ui}`,
    "panelSectionHeader.background": `${palette.bg2}`,
    "imagePreview.border": `${palette.bg}`,
    "statusBar.background": `${palette.bg2}`,
    "statusBar.foreground": `${palette.tx2}`,
    "statusBar.border": `${palette.ui}`,
    "statusBar.debuggingForeground": `${palette.orange}`,
    "statusBar.debuggingBackground": `${palette.ui}`,
    "statusBar.noFolderBackground": `${palette.ui}`,
    "statusBar.noFolderForeground": `${palette.tx2}`,
    "statusBar.noFolderBorder": `${palette.ui}`,
    "statusBarItem.hoverBackground": `${palette.ui2}a0`,
    "statusBarItem.activeBackground": `${palette.ui2}70`,
    "statusBarItem.prominentForeground": `${palette.tx}`,
    "statusBarItem.prominentBackground": `${palette.ui}`,
    "statusBarItem.prominentHoverBackground": `${palette.ui2}a0`,
    "statusBarItem.remoteBackground": `${palette.ui}`,
    "statusBarItem.remoteForeground": `${palette.tx2}`,
    "statusBarItem.errorBackground": `${palette.ui}`,
    "statusBarItem.errorForeground": `${palette.red}`,
    "statusBarItem.warningBackground": `${palette.ui}`,
    "statusBarItem.warningForeground": `${palette.yellow}`,
    "titleBar.activeBackground": `${palette.bg2}`,
    "titleBar.activeForeground": `${palette.tx2}`,
    "titleBar.inactiveBackground": `${palette.ui}`,
    "titleBar.inactiveForeground": `${palette.tx3}`,
    "titleBar.border": `${palette.ui}`,
    "menubar.selectionBackground": `${palette.bg}`,
    "menubar.selectionBorder": `${palette.bg}`,
    "menu.foreground": `${palette.tx2}`,
    "menu.background": `${palette.ui}`,
    "menu.selectionForeground": `${palette.tx}`,
    "menu.selectionBackground": `${palette.bg}`,
    "gitDecoration.addedResourceForeground": `${palette.green}`,
    "gitDecoration.modifiedResourceForeground": `${palette.blue}`,
    "gitDecoration.deletedResourceForeground": `${palette.red}`,
    "gitDecoration.untrackedResourceForeground": `${palette.yellow}`,
    "gitDecoration.ignoredResourceForeground": `${palette.tx3}`,
    "gitDecoration.conflictingResourceForeground": `${palette.purple}`,
    "gitDecoration.submoduleResourceForeground": `${palette.orange}`,
    "gitDecoration.stageDeletedResourceForeground": `${palette.aqua}`,
    "gitDecoration.stageModifiedResourceForeground": `${palette.aqua}`,
    "notificationCenterHeader.foreground": `${palette.tx}`,
    "notificationCenterHeader.background": `${palette.ui}`,
    "notifications.foreground": `${palette.tx}`,
    "notifications.background": `${palette.bg}`,
    "notificationLink.foreground": `${palette.green}`,
    "notificationsErrorIcon.foreground": `${palette.red}`,
    "notificationsWarningIcon.foreground": `${palette.yellow}`,
    "notificationsInfoIcon.foreground": `${palette.blue}`,
    "extensionButton.prominentForeground": `${palette.bg}`,
    "extensionButton.prominentBackground": `${palette.badge}`,
    "extensionButton.prominentHoverBackground": `${palette.badge}d0`,
    "extensionBadge.remoteBackground": `${palette.badge}`,
    "extensionBadge.remoteForeground": `${palette.bg}`,
    "extensionIcon.starForeground": `${palette.aqua}`,
    "extensionIcon.verifiedForeground": `${palette.green}`,
    "extensionIcon.preReleaseForeground": `${palette.orange}`,
    "pickerGroup.foreground": `${palette.tx}`,
    "quickInputTitle.background": `${palette.bg2}`,
    "keybindingLabel.background": `${palette.bg}00`,
    "keybindingLabel.foreground": `${palette.tx}`,
    "keybindingLabel.border": `${palette.bg2}`,
    "keybindingLabel.bottomBorder": `${palette.ui}`,
    "keybindingTable.headerBackground": `${palette.ui}`,
    "keybindingTable.rowsBackground": `${palette.bg2}`,
    "settings.headerForeground": `${palette.tx2}`,
    "settings.numberInputBackground": `${palette.bg}`,
    "settings.numberInputForeground": `${palette.purple}`,
    "settings.numberInputBorder": `${palette.ui3}`,
    "settings.textInputBackground": `${palette.bg}`,
    "settings.textInputForeground": `${palette.blue}`,
    "settings.textInputBorder": `${palette.ui3}`,
    "settings.checkboxBackground": `${palette.bg}`,
    "settings.checkboxForeground": `${palette.orange}`,
    "settings.checkboxBorder": `${palette.ui3}`,
    "settings.dropdownBackground": `${palette.bg}`,
    "settings.dropdownForeground": `${palette.aqua}`,
    "settings.dropdownBorder": `${palette.ui3}`,
    "settings.modifiedItemIndicator": `${palette.tx3}`,
    "settings.focusedRowBackground": `${palette.bg2}`,
    "settings.rowHoverBackground": `${palette.bg2}`,
    "editorLightBulb.foreground": `${palette.yellow}`,
    "editorLightBulbAutoFix.foreground": `${palette.aqua}`,
    "welcomePage.progress.foreground": `${palette.green}`,
    "welcomePage.tileHoverBackground": `${palette.bg2}`,
    "welcomePage.buttonBackground": `${palette.bg2}`,
    "welcomePage.buttonHoverBackground": `${palette.bg2}a0`,
    "walkThrough.embeddedEditorBackground": `${palette.bg2}`,
    "breadcrumb.foreground": `${palette.tx3}`,
    "breadcrumb.focusForeground": `${palette.tx}`,
    "breadcrumb.activeSelectionForeground": `${palette.tx}`,
    "symbolIcon.colorForeground": `${palette.tx}`,
    "symbolIcon.snippetForeground": `${palette.tx}`,
    "symbolIcon.fieldForeground": `${palette.tx}`,
    "symbolIcon.fileForeground": `${palette.tx}`,
    "symbolIcon.folderForeground": `${palette.tx}`,
    "symbolIcon.textForeground": `${palette.tx}`,
    "symbolIcon.unitForeground": `${palette.tx}`,
    "symbolIcon.keywordForeground": `${palette.red}`,
    "symbolIcon.operatorForeground": `${palette.orange}`,
    "symbolIcon.classForeground": `${palette.yellow}`,
    "symbolIcon.eventForeground": `${palette.yellow}`,
    "symbolIcon.interfaceForeground": `${palette.yellow}`,
    "symbolIcon.structForeground": `${palette.yellow}`,
    "symbolIcon.functionForeground": `${palette.green}`,
    "symbolIcon.keyForeground": `${palette.green}`,
    "symbolIcon.methodForeground": `${palette.green}`,
    "symbolIcon.stringForeground": `${palette.green}`,
    "symbolIcon.constantForeground": `${palette.aqua}`,
    "symbolIcon.enumeratorMemberForeground": `${palette.aqua}`,
    "symbolIcon.nullForeground": `${palette.aqua}`,
    "symbolIcon.propertyForeground": `${palette.aqua}`,
    "symbolIcon.typeParameterForeground": `${palette.aqua}`,
    "symbolIcon.arrayForeground": `${palette.blue}`,
    "symbolIcon.referenceForeground": `${palette.blue}`,
    "symbolIcon.variableForeground": `${palette.blue}`,
    "symbolIcon.booleanForeground": `${palette.purple}`,
    "symbolIcon.constructorForeground": `${palette.purple}`,
    "symbolIcon.enumeratorForeground": `${palette.purple}`,
    "symbolIcon.moduleForeground": `${palette.purple}`,
    "symbolIcon.namespaceForeground": `${palette.purple}`,
    "symbolIcon.numberForeground": `${palette.purple}`,
    "symbolIcon.objectForeground": `${palette.purple}`,
    "symbolIcon.packageForeground": `${palette.purple}`,
    "editor.snippetTabstopHighlightBackground": `${palette.ui}`,
    "editor.snippetFinalTabstopHighlightBackground": `${palette.dimGreen}40`,
    "editor.snippetFinalTabstopHighlightBorder": `${palette.bg}`,
    "charts.red": `${palette.red}`,
    "charts.orange": `${palette.orange}`,
    "charts.yellow": `${palette.yellow}`,
    "charts.green": `${palette.green}`,
    "charts.blue": `${palette.blue}`,
    "charts.purple": `${palette.purple}`,
    "charts.foreground": `${palette.tx}`,
    "ports.iconRunningProcessForeground": `${palette.orange}`,
    "sash.hoverBorder": `${palette.ui2}`,
    "notebook.cellBorderColor": `${palette.ui3}`,
    "notebook.cellStatusBarItemHoverBackground": `${palette.bg2}`,
    "notebook.focusedCellBackground": `${palette.bg}`,
    "notebook.cellHoverBackground": `${palette.bg}`,
    "notebook.outputContainerBackgroundColor": `${palette.bg2}`,
    "notebookStatusSuccessIcon.foreground": `${palette.green}`,
    "notebookStatusErrorIcon.foreground": `${palette.red}`,
    "notebookStatusRunningIcon.foreground": `${palette.blue}`,
    "notebook.focusedCellBorder": `${palette.ui3}`,
    "notebook.focusedEditorBorder": `${palette.ui3}`,
    "notebook.selectedCellBorder": `${palette.ui3}`,
    "notebook.focusedRowBorder": `${palette.ui3}`,
    "notebook.inactiveFocusedCellBorder": `${palette.ui3}`,
    "notebook.cellToolbarSeparator": `${palette.ui3}`,
    "testing.iconFailed": `${palette.red}`,
    "testing.iconErrored": `${palette.red}`,
    "testing.iconPassed": `${palette.aqua}`,
    "testing.runAction": `${palette.aqua}`,
    "testing.iconQueued": `${palette.blue}`,
    "testing.iconUnset": `${palette.yellow}`,
    "testing.iconSkipped": `${palette.purple}`,
    "gitlens.gutterBackgroundColor": `${palette.bg}`,
    "gitlens.gutterForegroundColor": `${palette.tx}`,
    "gitlens.gutterUncommittedForegroundColor": `${palette.blue}`,
    "gitlens.trailingLineForegroundColor": `${palette.tx3}`,
    "gitlens.lineHighlightBackgroundColor": `${palette.bg2}`,
    "gitlens.lineHighlightOverviewRulerColor": `${palette.badge}`,
    "gitlens.closedPullRequestIconColor": `${palette.red}`,
    "gitlens.openPullRequestIconColor": `${palette.aqua}`,
    "gitlens.mergedPullRequestIconColor": `${palette.purple}`,
    "gitlens.unpushlishedChangesIconColor": `${palette.blue}`,
    "gitlens.unpublishedCommitIconColor": `${palette.yellow}`,
    "gitlens.unpulledChangesIconColor": `${palette.orange}`,
    "gitlens.decorations.addedForegroundColor": `${palette.green}`,
    "gitlens.decorations.copiedForegroundColor": `${palette.purple}`,
    "gitlens.decorations.deletedForegroundColor": `${palette.red}`,
    "gitlens.decorations.ignoredForegroundColor": `${palette.tx2}`,
    "gitlens.decorations.modifiedForegroundColor": `${palette.blue}`,
    "gitlens.decorations.untrackedForegroundColor": `${palette.yellow}`,
    "gitlens.decorations.renamedForegroundColor": `${palette.purple}`,
    "gitlens.decorations.branchAheadForegroundColor": `${palette.aqua}`,
    "gitlens.decorations.branchBehindForegroundColor": `${palette.orange}`,
    "gitlens.decorations.branchDivergedForegroundColor": `${palette.yellow}`,
    "gitlens.decorations.branchUpToDateForegroundColor": `${palette.tx}`,
    "gitlens.decorations.branchUnpublishedForegroundColor": `${palette.blue}`,
    "gitlens.decorations.branchMissingUpstreamForegroundColor": `${palette.red}`,
    "issues.open": `${palette.aqua}`,
    "issues.closed": `${palette.red}`,
    "rust_analyzer.inlayHints.foreground": `${palette.tx3}a0`,
    "rust_analyzer.inlayHints.background": `${palette.bg}00`,
    "rust_analyzer.syntaxTreeBorder": `${palette.red}`,
  };
  if (configuration.highContrast) {
    Object.assign(tokens, {
      contrastBorder: `${palette.ui3}`,
      contrastActiveBorder: `${palette.tx3}`,
    });
  }
  return tokens;
}