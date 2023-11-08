import { FC } from 'react';

import { Box } from '@chakra-ui/react';

import { LogoFull } from './LogoFull';
import { LogoItem } from './LogoIcon';
import { LogoProps } from './types';

export const Logo: FC<LogoProps> = ({
  variant = 'full',
  size = 'large',
  ...props
}) => (
  <Box {...props}>
    <Box display='flex' justifyContent='start' alignItems='center'>
      {variant === 'full' ? (
        <Box>
          <LogoFull size={size} />
        </Box>
      ) : (
        <Box>
          <LogoItem size={size} />
        </Box>
      )}
    </Box>
  </Box>
);
