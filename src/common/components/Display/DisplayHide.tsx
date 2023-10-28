import { FC } from 'react';

import { Box } from '@chakra-ui/react';

import { CustomTheme } from '~/common/themes';

import { StaticDisplayProps } from './types';

export const DisplayHide: FC<StaticDisplayProps> = ({
  children,
  size = 'base',
}) => (
  <Box
    sx={{
      display: 'block',
      [`@media (min-width: ${CustomTheme.breakpoints[size]})`]: {
        display: 'none',
      },
    }}
  >
    {children}
  </Box>
);
