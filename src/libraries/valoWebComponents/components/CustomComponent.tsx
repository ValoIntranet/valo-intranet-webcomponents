import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface IObjectParam {
  [key: string]: string;
}

export interface ICustomComponentProps {}

export interface ICustomComponenState {}

export class CustomComponent extends React.Component<ICustomComponentProps, ICustomComponenState> {

  constructor(props: ICustomComponentProps) {
    super(props);
    this.state = {
      showPanel: false
    };
  }

  public render() {
    return <h1>Hello Valo World!</h1>;
  }
}


