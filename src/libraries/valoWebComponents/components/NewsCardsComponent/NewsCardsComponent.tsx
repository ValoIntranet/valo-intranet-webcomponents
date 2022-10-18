import { Stack } from 'office-ui-fabric-react';
import * as React from 'react';
import { INewsItem } from "../../models/INewsItem";
import { CardsContainer } from './CardsContainer';


export interface INewsCardsComponentProps {
  items: INewsItem[];
}


export const NewsCardsComponent: React.FunctionComponent<INewsCardsComponentProps> = (props: React.PropsWithChildren<INewsCardsComponentProps>) => {
  return (
    <>
      <Stack>
        <CardsContainer items={props.items} />
      </Stack>
    </>
  );
};