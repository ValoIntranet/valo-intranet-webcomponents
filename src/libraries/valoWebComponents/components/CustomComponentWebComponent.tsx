import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BaseWebComponent } from '@valo/extensibility';
import { CustomComponent } from '.';

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
