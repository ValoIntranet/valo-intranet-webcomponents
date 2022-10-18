import { ChoiceGroup, IChoiceGroupOption, Stack } from 'office-ui-fabric-react';
import * as React from 'react';
import { INewsItem } from "../../models/INewsItem";
import { CompactCardComponent, CardComponent } from '../CardComponent';
import { cardsContainerStyles } from "./NewsCardsStyles";

export interface INewsCardsComponentProps {
  items: INewsItem[];
}
type ContainerOptions = "Compact" | "Cards";

const containersOptions: IChoiceGroupOption[] = [
  {
    key: 'Compact',
    iconProps: {
      iconName: "ViewList"
    },
    text: 'Compact',
  },
  {
    key: 'Cards',
    iconProps: {
      iconName: "GridViewMedium"
    },
    text: 'Cards',
  }
];

export const NewsCardsComponent: React.FunctionComponent<INewsCardsComponentProps> = (props: React.PropsWithChildren<INewsCardsComponentProps>) => {
  const { items } = props;
  const [containerOption, setContainerOption] = React.useState<ContainerOptions>("Cards");

  const onChange = React.useCallback((ev: React.SyntheticEvent<HTMLElement>, option: IChoiceGroupOption) => {
    setContainerOption(option.key as ContainerOptions);
  }, []);


  if (!items) {
    return <div>No items to display</div>;
  }

  const containerStyles = containerOption === 'Cards' ? cardsContainerStyles : {};

  return (
    <>
      <ChoiceGroup defaultSelectedKey={containerOption} options={containersOptions} onChange={onChange}/>
      <div style={containerStyles}>
        {
          items.map(item => {
            
            return containerOption === 'Cards' ? <CardComponent {...item} /> : <CompactCardComponent {...item} />;
          })
        }
      </div>
    </>
  );

};