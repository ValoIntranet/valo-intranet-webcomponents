
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { BaseWebComponent } from "@valo/extensibility";
import { Spinner, SpinnerSize } from 'office-ui-fabric-react';

export class SpinnerWC extends BaseWebComponent {

  public constructor() {
    super();
  }

  public async connectedCallback() {
    // You can use this._ctx here to access current Web Part context
    const customComponent = <Spinner size={SpinnerSize.large} />;
    ReactDOM.render(customComponent, this);
  }
}