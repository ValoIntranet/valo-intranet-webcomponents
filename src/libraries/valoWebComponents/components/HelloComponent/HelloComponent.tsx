import * as React from 'react';

export interface IHelloComponentProps {
  name: string;
}

export interface IHelloComponentState {}

export class HelloComponent extends React.Component<IHelloComponentProps, IHelloComponentState> {
  public render(): React.ReactElement<IHelloComponentProps> {
    return (
      <div>Hello: {this.props.name}</div>
    );
  }
}
