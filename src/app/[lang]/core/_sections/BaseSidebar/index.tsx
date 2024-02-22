import { PropsWithChildren } from 'react';

import { Box, BoxProps } from '@chakra-ui/react';

const MENU_HEIGHT = '48px';
const SIDEBAR_WIDTH = 280;

export const BaseSidebar = ({
  children,
  ...boxProps
}: PropsWithChildren<BoxProps>) => (
  <Box w={SIDEBAR_WIDTH} position='relative' flexShrink={0} flexGrow={0}>
    <Box
      left='0'
      overflowY='auto'
      position='fixed'
      top={MENU_HEIGHT}
      w={SIDEBAR_WIDTH}
      h={`calc(100vh - ${MENU_HEIGHT})`}
      style={{
        direction: 'rtl',
      }}
    >
      <Box
        p='4'
        {...boxProps}
        style={{
          direction: 'ltr',
          ...boxProps.style,
        }}
      >
        {children}
      </Box>
    </Box>
  </Box>
);

export * from './components';
