
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { BaseWebComponent } from "@valo/extensibility";
import { ICardComponentProps } from './ICardComponentProps';
import { CardComponent } from "./CardComponent";

export class CardWC extends BaseWebComponent {

  public constructor() {
    super();
  }

  public async connectedCallback() {
    // You can use this._ctx here to access current Web Part context
    const cardProps: ICardComponentProps = this.resolveAttributes() as ICardComponentProps;
    
    const customComponent = <CardComponent {...cardProps} />;
    ReactDOM.render(customComponent, this);
  }
}