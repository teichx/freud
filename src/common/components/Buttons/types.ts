import { ReactNode } from 'react';

import { ButtonProps } from '@chakra-ui/react';
import { LinkProps } from 'next/link';

export type VariantButtonProps = Omit<ButtonProps, 'children'> & {
  text?: ReactNode;
};

export type LinkButtonProps = VariantButtonProps &
  Omit<LinkProps, 'children'> &
  Required<Pick<VariantButtonProps, 'text'>>;
