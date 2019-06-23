import * as symbolKeys from "../constants/symbolKeys";

class _EditorUtils {
  preventKeys = [
    symbolKeys.CTRL,
    symbolKeys.ALT,
    symbolKeys.ESCAPE,
    symbolKeys.CAPSLOCK,
    symbolKeys.META,
    symbolKeys.SHIFT
  ];
  DOUBLE_SPACE = "  ";

  getTextValueForAddedSymbol = symbol => value =>
    this.getTextValueIfBackspaceSymbol(symbol)(value) ||
    this.getTextValueIfPreventSymbol(symbol)(value) ||
    this.getTextValueIfTabSymbol(symbol)(value) ||
    this.getTextValueForInputSymbol(symbol)(value);

  getTextValueIfPreventSymbol = symbol => value => {
    if (this.preventKeys.includes(symbol)) {
      return value;
    }
  };

  getTextValueIfBackspaceSymbol = symbol => value => {
    if (symbol === symbolKeys.BACKSPACE) {
      if (value.length === 1) {
        return " ";
      }
      return value.substring(0, value.length - 1);
    }
  };

  getTextValueIfTabSymbol = symbol => value => {
    if (symbol === symbolKeys.TAB) {
      return `${value}${this.DOUBLE_SPACE}`;
    }
  };

  getTextValueForInputSymbol = symbol => value => `${value}${symbol}`;
}

export const EditorUtils = new _EditorUtils();
