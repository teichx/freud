import { ReactNode } from 'react';

import {
  LinkProps as ChakraUiLinkProps,
  ButtonProps,
  HTMLChakraProps,
} from '@chakra-ui/react';
import { LinkProps } from 'next/link';

import { LoaderType } from '~/core/services/Loader';

export type VariantButtonProps = ButtonProps & {
  text?: ReactNode;
  loaderKeys?: LoaderType[];
};

export type LinkButtonProps = Omit<ChakraUiLinkProps, 'href' | 'type'> &
  Pick<VariantButtonProps, 'text' | 'loaderKeys' | 'leftIcon' | 'isLoading'> &
  HTMLChakraProps<'button'> &
  Pick<LinkProps, 'href' | 'onClick'>;
