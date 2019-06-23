// @flow
import * as React from "react";
import { Component } from "react";

type Props = {
  condition: boolean,
  children: React.Node
};

type State = {};

const True = ({ condition, children }: Props) => (condition ? children : null);

const False = ({ condition, children }: Props) => (condition ? null : children);

export class If extends Component<Props, State> {
  static True = True;

  static False = False;

  mapChild = (child: any) => {
    const { condition } = this.props;
    return React.cloneElement(child, { condition });
  };

  mapChildren = () => {
    const { mapChild } = this;
    const { children } = this.props;
    return React.Children.map(children, mapChild);
  };

  render() {
    return this.mapChildren();
  }
}
