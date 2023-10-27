import {
  Box,
  Container,
  HStack,
  Flex,
  ButtonGroup,
  Hide,
  IconButton,
  Icon,
  useDisclosure,
  VStack,
  SlideFade,
  Show,
  Divider,
} from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { MdMenu, MdClose } from 'react-icons/md';

import { Buttons } from '~/common/components/Buttons';
import { Logo } from '~/common/components/Logo';
import { ProjectRoutes } from '~/core/constants';
import { useScopedI18n } from '~/i18n/client';

const isMobileSize = 'md';
const menuKeys = ['Home'] as const;

export const Header = () => {
  const t = useScopedI18n('project.header');
  const { status } = useSession();
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box top='0' left='0' w='100%' position='fixed' zIndex='sticky'>
      <Box bg='book.darkBlue.500'>
        <Container w='100%' maxW='container.xl' py='3'>
          <Flex alignItems='center' justifyContent='space-between'>
            <Flex alignItems='center' justifyContent='flex-start' color='white'>
              <Buttons.Link
                py='2'
                height='auto'
                color='white'
                variant='ghost'
                _hover={{
                  bg: 'whiteAlpha.300',
                }}
                href={ProjectRoutes.Home}
              >
                <Logo />
              </Buttons.Link>

              <Hide below={isMobileSize}>
                <HStack ml='4'>
                  {menuKeys.map((x) => (
                    <Box px='2' key={x}>
                      <Buttons.Link
                        color='white'
                        variant='link'
                        href={ProjectRoutes[x]}
                      >
                        {t(x)}
                      </Buttons.Link>
                    </Box>
                  ))}
                </HStack>
              </Hide>
            </Flex>

            <Hide below={isMobileSize}>
              <Flex alignItems='center'>
                {status === 'unauthenticated' && <Buttons.Login />}
                {status === 'authenticated' && (
                  <ButtonGroup size='sm'>
                    <Buttons.Access />
                    <Buttons.Logout />
                  </ButtonGroup>
                )}
              </Flex>
            </Hide>

            <Show below={isMobileSize}>
              <IconButton
                icon={<Icon as={isOpen ? MdClose : MdMenu} />}
                aria-label='open/close'
                onClick={onToggle}
              />
            </Show>
          </Flex>
        </Container>
      </Box>

      <Show below={isMobileSize}>
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
                <Buttons.Link w='100%' bg='white' href={ProjectRoutes[x]}>
                  {t(x)}
                </Buttons.Link>
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
      </Show>
    </Box>
  );
};
