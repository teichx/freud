import { Box, Button, ButtonGroup, Flex, HStack } from '@chakra-ui/react';
import Link from 'next/link';

import { GoogleLogin } from '~/components/GoogleLogin';
import { Logo } from '~/components/Logo';
import { useAuth } from '~/services/Auth';

import { HeaderDetails } from './components/HeaderDetails';

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
      <HStack w='100%' py='2' px='8' spacing={4} bg='#333'>
        <HStack w='50%' alignItems='center'>
          <Logo mr={4} color='#fff' />

          <ButtonGroup variant='unstyled' spacing='8' color='white'>
            {MENU_ITEMS.map(({ path, label }) => (
              <Link key={path} href={path}>
                <Button>{label}</Button>
              </Link>
            ))}
          </ButtonGroup>
        </HStack>

        <Flex w='50%' justifyContent='flex-end'>
          {isLogged ? <HeaderDetails /> : <GoogleLogin size='medium' />}
        </Flex>
      </HStack>
    </Box>
  );
};
