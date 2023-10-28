'use server';
import { Box, Container, HStack, Flex } from '@chakra-ui/react';

import { LinkButton } from '~/common/components/Buttons/variant/LinkButton';
import { Display } from '~/common/components/Display';
import { Logo } from '~/common/components/Logo';
import { ProjectRoutes } from '~/core/constants';
import { getScopedI18n } from '~/i18n/server';

import { AccessButtons } from './AccessButtons';
import { menuKeys } from './constants';
import { MobileMenu } from './MobileMenu';

export const Header = async () => {
  const t = await getScopedI18n('project.header');

  return (
    <Box top='0' left='0' w='100%' position='fixed' zIndex='sticky'>
      <Box bg='book.darkBlue.500'>
        <Container w='100%' maxW='container.xl' py='3'>
          <Flex alignItems='center' justifyContent='space-between'>
            <Flex alignItems='center' justifyContent='flex-start' color='white'>
              <LinkButton
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
              </LinkButton>

              <Display.Show size='md'>
                <HStack ml='4'>
                  {menuKeys.map((x) => (
                    <Box px='2' key={x}>
                      <LinkButton
                        color='white'
                        variant='link'
                        href={ProjectRoutes[x]}
                      >
                        {t(x)}
                      </LinkButton>
                    </Box>
                  ))}
                </HStack>
              </Display.Show>
            </Flex>

            <Display.Show size='md'>
              <AccessButtons />
            </Display.Show>

            <Display.Hide size='md'>
              <MobileMenu />
            </Display.Hide>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};
