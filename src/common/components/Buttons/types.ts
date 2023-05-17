import { ReactNode } from 'react';

import { ButtonProps } from '@chakra-ui/react';
import { LinkProps } from 'next/link';

export type VariantButtonProps = ButtonProps & {
  text?: ReactNode;
};

export type LinkButtonProps = VariantButtonProps &
  Pick<LinkProps, 'href'> & {
    linkProps?: Omit<LinkProps, 'href'>;
  } & Pick<VariantButtonProps, 'text'>;
