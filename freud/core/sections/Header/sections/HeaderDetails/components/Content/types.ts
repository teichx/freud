import { FC } from 'react';

import { HeaderDetailsContent } from '../../types';

export type HeaderDetailsContentProps = {
  toContent: (content: HeaderDetailsContent) => void;
};

export type ContentProps = Pick<HeaderDetailsContentProps, 'toContent'> & {
  content: HeaderDetailsContent;
};

export type ContentVariationProps = {
  [key in HeaderDetailsContent]: FC<HeaderDetailsContentProps>;
};
