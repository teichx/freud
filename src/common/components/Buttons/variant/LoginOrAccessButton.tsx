'use client';

import { Box } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';

import { LinkButtonProps, VariantButtonProps } from '../types';
import { AccessButton } from './AccessButton';
import { LoginButton } from './LoginButton';

export const LoginOrAccessButton = (
  props: VariantButtonProps & Omit<LinkButtonProps, 'href'>
) => {
  const { status } = useSession();

  const Component = {
    authenticated: AccessButton,
    unauthenticated: LoginButton,
    loading: Box,
  }[status];

  return <Component {...props} />;
};
