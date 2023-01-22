import { FC } from 'react';

import { Button } from '@chakra-ui/react';
import Link from 'next/link';

import { HeaderButtonProps } from './types';

export const HeaderButton: FC<HeaderButtonProps> = (props) => (
  <Button
    width='100%'
    iconSpacing='4'
    borderRadius='0'
    bgColor='transparent'
    justifyContent='flex-start'
    as={props.href ? Link : undefined}
    {...props}
  />
);
