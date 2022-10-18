import * as React from 'react';
import { INewsItem } from '../../models/INewsItem';
import { CardComponent } from "../CardComponent";
import { cardsContainerStyles } from "./NewsCardsStyles";

export interface ICardsContainerProps {
  items: INewsItem[];
}

export const CardsContainer: React.FunctionComponent<ICardsContainerProps> = (props: React.PropsWithChildren<ICardsContainerProps>) => {
  const { items } = props;

  if (!items) {
    return <div>No items to display</div>;
  }

  return (
    <div style={cardsContainerStyles}>
      {
        items.map(item => {
          return <CardComponent {...item} />;
        })
      }
    </div>
  );
};