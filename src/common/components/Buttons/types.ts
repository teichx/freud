import { ReactNode } from 'react';

import { ButtonProps } from '@chakra-ui/react';
import { LinkProps } from 'next/link';

export type VariantButtonProps = Omit<ButtonProps, 'children'> & {
  text?: ReactNode;
};

export type LinkButtonProps = VariantButtonProps &
  Pick<LinkProps, 'href'> & {
    linkProps?: Omit<LinkProps, 'children' | 'href'>;
  } & Required<Pick<VariantButtonProps, 'text'>>;
