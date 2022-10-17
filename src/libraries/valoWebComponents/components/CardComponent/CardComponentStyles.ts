import * as React from 'react';
import { IDocumentCardDetailsStyles, IDocumentCardStyles } from "office-ui-fabric-react";

export const documentCardStyles: IDocumentCardStyles = {
  root: {
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    borderColor:  undefined,
    maxWidth: 284,
    height: 304,
    borderRadius: 8,
    overflow: "hidden",
    ":hover:after": {
      borderRadius: 8,
      border: "unset",
    },
  }
};

export const documentCardDetails: IDocumentCardDetailsStyles = {
  root: {
    margin: "1rem"
  }
};