import { PropsWithChildren, useEffect, useRef } from 'react';

import { Box, BoxProps, SlideFade, useBreakpointValue } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';

import { ButtonToggleSidebar } from './components';
import { useSidebarContext } from './context';

const MENU_HEIGHT = '48px';

export const BaseSidebar = ({
  children,
  ...boxProps
}: PropsWithChildren<BoxProps>) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const { isOpen, onClose } = useSidebarContext();
  const pathname = usePathname();
  const isMobile = useBreakpointValue([true, true, false], { ssr: false });

  useEffect(() => {
    if (isMobile) {
      onClose();
    }

    rootRef.current?.parentElement?.scroll(0, 0);
  }, [pathname, isMobile, onClose]);

  const w = {
    base: isOpen ? '100%' : '0%',
    md: isOpen ? '280px' : '0px',
  };

  return (
    <Box
      ref={rootRef}
      minW={w}
      maxW={w}
      zIndex={1}
      position='relative'
      transitionDuration='.25s'
      transitionProperty='max-width, min-width'
      overflow={['hidden', 'hidden', 'visible']}
    >
      <Box mt='4'>
        <ButtonToggleSidebar />
      </Box>

      {isOpen && (
        <SlideFade
          in={isOpen}
          transition={{
            enter: { delay: 0.25 },
            exit: { duration: 0 },
          }}
        >
          <Box
            w='100%'
            overflowY='auto'
            position='relative'
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
        </SlideFade>
      )}
    </Box>
  );
};

export * from './components';
