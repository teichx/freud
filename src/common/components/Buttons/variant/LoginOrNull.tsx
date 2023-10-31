'use client';

import { Box } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';

import { VariantButtonProps } from '../types';
import { LoginButton } from './LoginButton';

export const LoginOrNull = (props: VariantButtonProps) => {
  const { status } = useSession();

  const Component = {
    authenticated: Box,
    unauthenticated: LoginButton,
    loading: Box,
  }[status];

  return <Component {...props} />;
};
