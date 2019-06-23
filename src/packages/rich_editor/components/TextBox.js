// @flow
import React, { Component } from "react";
import { Cursor } from "./Cursor/Cursor";
import { EditorUtils } from "../utils/EditorUtils";

type Props = {
  value: string,
  onChange: Function
};

type State = {
  cursorIndex: number
};

const initialState = {
  cursorIndex: 0
};

export class TextBox extends Component<Props, State> {
  static defaultProps = {
    value: ""
  };
  textBoxRef: any;

  constructor(props: Props) {
    super(props);
    this.state = initialState;
    this.textBoxRef = React.createRef();
  }

  componentDidMount() {
    this.textBoxRef.current.focus();
  }

  textBoxKeyDownHandler = (e: Object) => {
    const symbol = e.key;
    const { onChange, value } = this.props;
    e.preventDefault();
    onChange(EditorUtils.getTextValueForAddedSymbol(symbol)(value));
    this.setCursorIndexForSymbol(symbol);
  };

  setCursorIndexForSymbol = (symbol: string) => {
    const cursorIndex = EditorUtils.getCursorIndexForAddedSymbol(symbol)(
      this.state.cursorIndex
    );
    this.setState({ cursorIndex });
  };

  mapValueSymbolToContent = (valueSymbol: string, index: number) => {
    const { cursorIndex } = this.state;
    if (index === cursorIndex) {
      return (
        <>
          <Cursor />
          {valueSymbol}
        </>
      );
    }
    return valueSymbol;
  };

  renderContent = () =>
    this.props.value.split("").map(this.mapValueSymbolToContent);

  render() {
    return (
      <div
        ref={this.textBoxRef}
        onKeyDown={this.textBoxKeyDownHandler}
        tabIndex="0"
      >
        {this.renderContent()}
      </div>
    );
  }
}
