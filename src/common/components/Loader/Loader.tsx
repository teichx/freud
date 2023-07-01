import { FC } from 'react';

import { CircularProgress } from '@chakra-ui/react';

import { StyledLoader } from './style';
import { LoaderProps } from './types';

export const Loader: FC<LoaderProps> = ({
  isLoading,
  color = 'book.desertSun.500',
}) => (
  <StyledLoader data-is-loading={isLoading}>
    <CircularProgress isIndeterminate color={color} />
  </StyledLoader>
);
