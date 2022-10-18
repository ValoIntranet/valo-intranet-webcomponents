import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { BaseWebComponent } from "@valo/extensibility";
import { NewsCardsComponent } from './NewsCardsComponent';
import { INewsItem } from '../../models/INewsItem';

export class NewsCardsWC extends BaseWebComponent {

  public constructor() {
    super();
  }

  public async connectedCallback() {
    const props = this.resolveAttributes();
    const searchItems = JSON.parse(props.items);
    const items: INewsItem[] = searchItems.map(item => {
      return {
        title: item["Title"],
        imageUrl: item["PictureThumbnailURL"],
        linkUrl: item["Path"],
        description: item["Description"],
        author: item["AuthorOWSUSER"]
      };
    });
    const customComponent = <NewsCardsComponent items={items} />;
    ReactDOM.render(customComponent, this);
  }
}