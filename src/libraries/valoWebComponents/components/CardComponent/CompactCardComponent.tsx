import * as React from 'react';
import { Stack, DocumentCardDetails, DocumentCard, DocumentCardTitle, ImageFit, IDocumentCardPreviewProps, DocumentCardPreview, DocumentCardType } from 'office-ui-fabric-react';
import { ICardComponentProps } from "./ICardComponentProps";
import { documentCardStyles, documentCardDetails } from './CardComponentStyles';

export const CompactCardComponent: React.FunctionComponent<ICardComponentProps> = (props: React.PropsWithChildren<ICardComponentProps>) => {
  const { title, description, imageUrl, linkUrl } = props;
  const documentPreviewProps: IDocumentCardPreviewProps = {
    previewImages: [
      {
        previewImageSrc: imageUrl,
        width: 156,
      },
    ]
  };

  return (
    <>
      <Stack>
        <DocumentCard onClickHref={linkUrl} type={DocumentCardType.compact}>
          <DocumentCardPreview {...documentPreviewProps} />
          <DocumentCardDetails>
            <DocumentCardTitle title={title} shouldTruncate={true} />
            <DocumentCardDetails styles={documentCardDetails}>{description}</DocumentCardDetails>
          </DocumentCardDetails>
        </DocumentCard>
      </Stack>
    </>
  );
};