import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BaseWebComponent } from '@valo/extensibility';

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

export class CustomComponentWebComponent extends BaseWebComponent {

  public constructor() {
    super();
  }

  public async connectedCallback() {

    let props = this.resolveAttributes();
    // You can use this._ctx here to access current Web Part context
    const customComponent = <CustomComponent {...props} />;
    ReactDOM.render(customComponent, this);
  }
}
