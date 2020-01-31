import { IWebComponentProvider, IWebComponentDefinition } from '@valo/extensibility';
import { CustomComponentWebComponent } from './components';

export class ValoWebComponentsLibrary implements IWebComponentProvider {

  /**
   * Return your custom web components
   */
  public getWebComponents(): IWebComponentDefinition<any>[] {
    return [
      {
        name: 'custom-component',
        class: CustomComponentWebComponent
      }
    ];
  }
}
