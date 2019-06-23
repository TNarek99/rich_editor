import * as symbolKeys from "../constants/symbolKeys";

class _EditorUtils {
  preventKeys = [
    symbolKeys.CTRL,
    symbolKeys.ALT,
    symbolKeys.ESCAPE,
    symbolKeys.CAPSLOCK,
    symbolKeys.META,
    symbolKeys.SHIFT,
    symbolKeys.ARROW_DOWN,
    symbolKeys.ARROW_LEFT,
    symbolKeys.ARROW_RIGHT,
    symbolKeys.ARROW_UP
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

  getCursorIndexForAddedSymbol = symbol => cursorIndex => {
    const { ARROW_LEFT, ARROW_RIGHT } = symbolKeys;
    const backStepIndex = cursorIndex - 1 < 0 ? 0 : cursorIndex - 1;
    const forwardStepIndex = cursorIndex + 1;
    if (symbol === ARROW_LEFT) {
      return backStepIndex;
    }
    if (symbol === ARROW_RIGHT) {
      return forwardStepIndex;
    }
    return cursorIndex;
  };
}

export const EditorUtils = new _EditorUtils();
