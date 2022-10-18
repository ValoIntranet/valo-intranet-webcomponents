import { IWebComponentProvider, IWebComponentDefinition } from '@valo/extensibility';
import { HelloComponentWC, SpinnerWC, CardWC, NewsCardsWC } from './components';

export class ValoWebComponentsLibrary implements IWebComponentProvider {

  /**
   * Return your custom web components
   */
  public getWebComponents(): IWebComponentDefinition<any>[] {
    return [
      {
        name: 'hello-wc',
        class: HelloComponentWC
      },
      {
        name: 'spinner-wc',
        class: SpinnerWC
      },
      {
        name: 'card-wc',
        class: CardWC
      },
      {
        name: 'news-containers-wc',
        class: NewsCardsWC
      }
    ];
  }
}
