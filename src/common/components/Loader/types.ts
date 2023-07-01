import { ComponentProps } from 'react';

import { CircularProgress } from '@chakra-ui/react';

export type LoaderProps = {
  isLoading: boolean;
  color?: ComponentProps<typeof CircularProgress>['color'];
};

export type LoaderStyledProps = {
  'data-is-loading'?: boolean;
};
