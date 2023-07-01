import { ReactNode } from 'react';

import { ButtonProps } from '@chakra-ui/react';
import { LinkProps } from 'next/link';

import { LoaderType } from '~/core/services/Loader';

export type VariantButtonProps = ButtonProps & {
  text?: ReactNode;
  loaderKeys?: LoaderType[];
};

export type LinkButtonProps = VariantButtonProps &
  Pick<LinkProps, 'href'> & {
    linkProps?: Omit<LinkProps, 'href'>;
  } & Pick<VariantButtonProps, 'text'>;
