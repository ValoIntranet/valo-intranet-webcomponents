import { IWebComponentProvider, IWebComponentDefinition } from '@valo/extensibility';
import { HelloComponentWC, SpinnerWC } from './components';
import { CardWC } from './components/CardComponent';

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
      }
    ];
  }
}
