// @flow
import React, { Component } from "react";
import { Cursor } from "./Cursor/Cursor";
import { EditorUtils } from "../utils/EditorUtils";

type Props = {
  value: string,
  onChange: Function
};

type State = {};

export class TextBox extends Component<Props, State> {
  static defaultProps = {
    value: ""
  };
  textBoxRef: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      isActive: false
    };
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
  };

  render() {
    const { value } = this.props;

    return (
      <div
        ref={this.textBoxRef}
        onKeyDown={this.textBoxKeyDownHandler}
        tabIndex="0"
      >
        {value}
        <Cursor />
      </div>
    );
  }
}
