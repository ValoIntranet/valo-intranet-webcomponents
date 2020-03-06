import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface ICustomComponentProps {}

export interface ICustomComponenState {}

export class CustomComponent extends React.Component<ICustomComponentProps, ICustomComponenState> {

  public render() {
    return <h1>Hello Valo World!</h1>;
  }
}


