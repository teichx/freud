'use client';
import { PropsWithChildren } from 'react';

import { Box } from '@chakra-ui/react';

import { useSoftRefresh } from './useSoftRefresh';

export function SoftRefreshWrapper({ children }: PropsWithChildren) {
  const { id } = useSoftRefresh();

  return (
    <Box id={id} key={id} h='100%'>
      {children}
    </Box>
  );
}
