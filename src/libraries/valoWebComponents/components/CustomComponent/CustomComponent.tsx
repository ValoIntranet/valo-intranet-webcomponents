import * as React from 'react';
import { ProviderService, IntranetProvider, ISearchResponse } from '@valo/extensibility';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';

export interface IObjectParam {
  [key: string]: string;
}

export interface ICustomComponentProps {
  title: string;
}

export interface ICustomComponenState {
  text: string;
  results: any[];
}

export class CustomComponent extends React.Component<ICustomComponentProps, ICustomComponenState> {
  private providerService: ProviderService = null;

  constructor(props: ICustomComponentProps) {
    super(props);

    this.providerService = ProviderService.getInstance();

    this.state = {
      text: null,
      results: []
    };
  }

  private getHubSiteData = async () => {
    const configProvider = await this.providerService.getProvider<any>(IntranetProvider.Config);
    const searchProvider = await this.providerService.getProvider<any>(IntranetProvider.Search);
    if (configProvider && configProvider.instance && searchProvider && searchProvider.instance) {
      const hubId = configProvider.instance.HubSiteData.ID;
      const search = searchProvider.instance;
      const data: ISearchResponse = await search.get(`departmentid:{${hubId}} AND contentclass:sts_site`, null, null, false, false, null, null, ["Path", "Title"]);
      if (data && data.results && data.results.length > 0) {
        this.setState({
          results: data.results
        });
      }
    }
  }

  public render() {
    return (
      <div>
        <h2>{this.props.title || "Custom component"}</h2>
        {
          this.state.results && this.state.results.length > 0 && <h3>Total results: {this.state.results.length}</h3>
        }

        {
          (this.state.results && this.state.results.length > 0) && this.state.results.map((val, idx) => {
            return <img src={require(`./images/Asset ${idx+1}.png`)} height="80px" style={{marginRight:"15px"}} />;
          })
        }

        <div style={{marginTop:"15px"}}>
          <PrimaryButton text="Click to get data!" onClick={this.getHubSiteData} />
        </div>
      </div>
    );
  }
}
