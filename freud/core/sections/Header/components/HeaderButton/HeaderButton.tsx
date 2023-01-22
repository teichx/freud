import { FC } from 'react';

import { Box, Button } from '@chakra-ui/react';
import Link from 'next/link';

import { HeaderButtonProps } from './types';

export const HeaderButton: FC<HeaderButtonProps> = ({ children, ...props }) => (
  <Button
    width='100%'
    iconSpacing='4'
    borderRadius='0'
    bgColor='transparent'
    justifyContent='flex-start'
    as={props.href ? Link : undefined}
    {...props}
  >
    <Box w='100%' textAlign='left'>
      {children}
    </Box>
  </Button>
);
