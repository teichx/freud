import { FC } from 'react';

import { Box } from '@chakra-ui/react';

import { CustomTheme } from '~/common/themes';

import { StaticDisplayProps } from './types';

export const DisplayShow: FC<StaticDisplayProps> = ({
  children,
  size = 'base',
}) => (
  <Box
    sx={{
      display: 'none',
      [`@media (min-width: ${CustomTheme.breakpoints[size]})`]: {
        display: 'block',
      },
    }}
  >
    {children}
  </Box>
);
