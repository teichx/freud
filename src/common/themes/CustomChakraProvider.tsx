'use client';
import { PropsWithChildren } from 'react';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';

import { CustomTheme } from './CustomTheme';

export function CustomChakraProvider({ children }: PropsWithChildren) {
  return (
    <CacheProvider>
      <ChakraProvider theme={CustomTheme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
