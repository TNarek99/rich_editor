// @flow
import React, { Component } from "react";
import { TextBox } from "./components/TextBox";

type Props = {};

type State = {
  textBoxValue: string
};

export class RichEditor extends Component<Props, State> {
  state = {
    textBoxValue: "Hi rich!"
  };

  textBoxValueChangedHandler = (textBoxValue: string) =>
    this.setState({ textBoxValue });

  render() {
    const { textBoxValue } = this.state;
    return (
      <TextBox
        value={textBoxValue}
        onChange={this.textBoxValueChangedHandler}
      />
    );
  }
}
