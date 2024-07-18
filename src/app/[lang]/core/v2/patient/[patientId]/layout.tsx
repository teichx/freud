'use client';
import { PropsWithChildren } from 'react';

import { Box } from '@chakra-ui/react';

import { SidebarWrapper } from '../../../_sections/BaseSidebar';
import { SyncStatus, Sidebar } from './_sections';

export default function PatientLayout({ children }: PropsWithChildren) {
  return (
    <SidebarWrapper
      mx='4'
      bg='gray.200'
      _dark={{ bg: 'gray.800' }}
      Sidebar={Sidebar}
    >
      <Box
        display='flex'
        flexGrow={1}
        flexShrink={1}
        flexDirection='column'
        height='100%'
      >
        <SyncStatus />

        <Box
          mb='4'
          bg='gray.50'
          flexGrow={1}
          display='flex'
          boxShadow='0 0 16px 0 rgba(0,0,0, 0.45)'
          _dark={{
            bg: 'gray.700',
          }}
          borderWidth={1}
          borderRadius='lg'
          flexDirection='column'
          overflow='hidden'
        >
          <Box
            p='5'
            flexGrow={1}
            display='flex'
            overflowY='auto'
            flexDirection='column'
          >
            {children}
          </Box>
        </Box>
      </Box>
    </SidebarWrapper>
  );
}
