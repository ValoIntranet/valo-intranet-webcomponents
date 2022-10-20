import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { BaseWebComponent } from "@valo/extensibility";
import { HelloComponent } from "./HelloComponent";

export class HelloComponentWC extends BaseWebComponent {

  public constructor() {
    super();
  }

  public async connectedCallback() {
    // You can use this._ctx here to access current Web Part context
    const name = this._ctx.pageContext.user.displayName;
    
    const customComponent = <div>Hello: {name}</div>;//<HelloComponent name={name} />;
    ReactDOM.render(customComponent, this);
  }
}