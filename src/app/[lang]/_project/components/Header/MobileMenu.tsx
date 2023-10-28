'use client';

import { Suspense } from 'react';

import {
  IconButton,
  Icon,
  Box,
  SlideFade,
  VStack,
  Divider,
  useDisclosure,
} from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { MdMenu, MdClose } from 'react-icons/md';

import { Buttons } from '~/common/components/Buttons';
import { LinkButton } from '~/common/components/Buttons/variant';
import { ProjectRoutes } from '~/core/constants';
import { useScopedI18n } from '~/i18n/client';

import { menuKeys } from './constants';

export const MobileMenu = () => {
  const { isOpen, onToggle } = useDisclosure();
  const t = useScopedI18n('project.header');
  const { status } = useSession();

  return (
    <Suspense>
      <IconButton
        onClick={onToggle}
        aria-label='open/close'
        icon={<Icon fontSize='2xl'>{isOpen ? <MdClose /> : <MdMenu />}</Icon>}
      />

      <Box top='80px' left='0' position='absolute' width='100%'>
        <SlideFade in={isOpen} offsetY='-12' unmountOnExit>
          <VStack
            pt='4'
            pb='6'
            px='4'
            w='100%'
            bg='book.darkBlue.500'
            borderBottomRadius='xl'
          >
            {menuKeys.map((x) => (
              <Box w='100%' key={x}>
                <LinkButton w='100%' bg='white' href={ProjectRoutes[x]}>
                  {t(x)}
                </LinkButton>
              </Box>
            ))}

            <Box w='100%' py='2'>
              <Divider bg='white' opacity='1' />
            </Box>

            {status === 'unauthenticated' && <Buttons.Login w='100%' />}
            {status === 'authenticated' && (
              <Box w='100%'>
                <Buttons.Access w='100%' />
              </Box>
            )}
            {status === 'authenticated' && <Buttons.Logout w='100%' />}
          </VStack>
        </SlideFade>
      </Box>
    </Suspense>
  );
};
