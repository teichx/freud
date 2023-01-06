import { Flex } from '@chakra-ui/react';

import { GoogleLogin } from '../components/GoogleLogin';

export const Login = () => (
  <Flex height='100vh' alignItems='center' justifyContent='center'>
    <GoogleLogin />
  </Flex>
);

export default Login;
