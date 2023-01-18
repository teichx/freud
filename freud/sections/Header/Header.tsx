import { Box, ButtonGroup, Flex, HStack } from '@chakra-ui/react';
import Link from 'next/link';

import { GoogleLogin } from '~/components/GoogleLogin';
import { Logo } from '~/components/Logo';
import { ToggleTheme } from '~/components/ToggleTheme';
import { useAuth } from '~/services/Auth';

import { HeaderDetails } from './components/HeaderDetails';
import { HeaderButton } from './styles';

const MENU_ITEMS = [
  {
    path: '/dashboard',
    label: 'Dashboard',
  },
  {
    path: '/patients',
    label: 'Pacientes',
  },
] as const;

export const Header = () => {
  const { isLogged } = useAuth();

  return (
    <Box w='100%'>
      <HStack w='100%' py='2' px='8' spacing={4} bg='book.darkBlue'>
        <HStack w='50%' alignItems='center'>
          <Logo mr={4} color='book.desertSun' />

          <ButtonGroup variant='unstyled' spacing='8' color='white'>
            {MENU_ITEMS.map(({ path, label }) => (
              <HeaderButton key={path} href={path} as={Link}>
                {label}
              </HeaderButton>
            ))}
          </ButtonGroup>
        </HStack>

        <Flex w='50%' justifyContent='flex-end' alignItems='center'>
          {isLogged ? (
            <>
              <ToggleTheme mr={4} size='sm' />
              <HeaderDetails />
            </>
          ) : (
            <GoogleLogin size='medium' />
          )}
        </Flex>
      </HStack>
    </Box>
  );
};
