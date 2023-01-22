import { ButtonProps } from '@chakra-ui/react';
import { LinkProps } from 'next/link';

export type HeaderButtonProps =
  | (ButtonProps & { href?: undefined })
  | (Omit<ButtonProps, 'as'> & {
      href: LinkProps['href'];
    });
