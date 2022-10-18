import * as React from 'react';
import { Stack, DocumentCardDetails, DocumentCard, DocumentCardTitle, ImageFit, IDocumentCardPreviewProps, DocumentCardPreview } from 'office-ui-fabric-react';
import { ICardComponentProps } from "./ICardComponentProps";
import { documentCardStyles, documentCardDetails } from './CardComponentStyles';

export const CardComponent: React.FunctionComponent<ICardComponentProps> = (props: React.PropsWithChildren<ICardComponentProps>) => {
  const { title, description, imageUrl, linkUrl } = props;
  
  const documentPreviewProps: IDocumentCardPreviewProps = {
    previewImages: [
      {
        previewImageSrc: imageUrl,
        imageFit: ImageFit.cover,
        height: 152,
      },
    ]
  };

  return (
    <>
      <Stack>
        <DocumentCard styles={documentCardStyles} onClickHref={linkUrl}>
          <DocumentCardPreview {...documentPreviewProps} />
          <DocumentCardTitle title={title} shouldTruncate={true}/>
          <DocumentCardDetails styles={documentCardDetails}>{description}</DocumentCardDetails>
        </DocumentCard>
      </Stack>
    </>
  );
};