import { ComponentProps, ReactNode } from 'react';

import { ButtonProps } from '@chakra-ui/react';
import Link from 'next/link';

import { LoaderType } from '~/core/services/Loader';

type LinkProps = ComponentProps<typeof Link>;

export type VariantButtonProps = ButtonProps & {
  text?: ReactNode;
  loaderKeys?: LoaderType[];
};

export type LinkButtonProps = VariantButtonProps &
  Pick<LinkProps, 'href'> & {
    linkProps?: Omit<LinkProps, 'href'>;
  } & Pick<VariantButtonProps, 'text'>;
