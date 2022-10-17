import * as React from 'react';
import { Stack, DocumentCardDetails, DocumentCard, DocumentCardTitle } from 'office-ui-fabric-react';
import { ICardComponentProps } from "./ICardComponentProps";


export const CardComponent: React.FunctionComponent<ICardComponentProps> = (props: React.PropsWithChildren<ICardComponentProps>) => {
  const { title, description, imageUrl } = props;

  return (
    <>
      <Stack>
        <DocumentCard  >
          

          <DocumentCardTitle title={title} shouldTruncate={true} />
          <DocumentCardDetails>{description}</DocumentCardDetails>
        </DocumentCard>
      </Stack>
    </>
  );
};