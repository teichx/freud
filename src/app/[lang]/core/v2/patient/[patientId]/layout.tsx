'use client';
import { PropsWithChildren } from 'react';

import { Box } from '@chakra-ui/react';

import { Sidebar } from './_sections/Sidebar';

export default function PatientLayout({ children }: PropsWithChildren) {
  return (
    <Box
      flexGrow={1}
      display='flex'
      flexDirection='row'
      bg='gray.200'
      _dark={{ bg: 'gray.800' }}
    >
      <Sidebar />

      <Box
        mr='4'
        mb='4'
        display='flex'
        flexGrow={1}
        flexShrink={1}
        flexDirection='column'
      >
        <Box my='4' w='100%' display='flex' justifyContent='flex-end'>
          <p>{new Date().toLocaleString()}</p>
        </Box>

        <Box
          p='5'
          bg='gray.50'
          _dark={{
            bg: 'gray.700',
          }}
          flexGrow={1}
          flexShrink={1}
          borderWidth={1}
          borderRadius='lg'
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
