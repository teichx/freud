import { Box, ButtonGroup, Flex, HStack } from '@chakra-ui/react';
import Link from 'next/link';

import { GoogleLogin } from '~/components/GoogleLogin';
import { Logo } from '~/components/Logo';
import { Routes } from '~/constants/Routes';
import { useAuth } from '~/core/services/Auth';

import { HeaderDetails } from './components/HeaderDetails';
import { HeaderButton } from './styles';

const MENU_ITEMS = [
  {
    path: Routes.Core.Dashboard.Default,
    label: 'Dashboard',
  },
  {
    path: Routes.Core.Patient.List,
    label: 'Pacientes',
  },
] as const;

export const Header = () => {
  const { isLogged } = useAuth();

  return (
    <Box w='100%'>
      <HStack w='100%' py='2' px='8' spacing={4} bg='book.darkBlue.100'>
        <HStack w='50%' alignItems='center'>
          <Logo mr={4} color='book.desertSun.100' />

          <ButtonGroup variant='unstyled' spacing='8' color='white'>
            {MENU_ITEMS.map(({ path, label }) => (
              <HeaderButton key={path} href={path} as={Link}>
                {label}
              </HeaderButton>
            ))}
          </ButtonGroup>
        </HStack>

        <Flex w='50%' justifyContent='flex-end' alignItems='center'>
          {isLogged ? <HeaderDetails /> : <GoogleLogin size='medium' />}
        </Flex>
      </HStack>
    </Box>
  );
};
