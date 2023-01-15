import { Box, Flex, HStack } from '@chakra-ui/react';

import { GoogleLogin } from '~/components/GoogleLogin';
import { useAuth } from '~/services/Auth';

import { HeaderDetails } from './components/HeaderDetails';

export const Header = () => {
  const { isLogged } = useAuth();

  return (
    <Box w='100%'>
      <HStack w='100%' py='2' px='8' spacing={4} bg='#333'>
        <Box w='50%' />

        <Flex w='50%' justifyContent='flex-end'>
          {isLogged ? <HeaderDetails /> : <GoogleLogin size='medium' />}
        </Flex>
      </HStack>
    </Box>
  );
};
