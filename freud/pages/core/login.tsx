import { Flex } from '@chakra-ui/react';

import { GoogleLogin } from '~/components/GoogleLogin';

export const Login = () => (
  <Flex height='100vh' align='center' justify='center'>
    <GoogleLogin />
  </Flex>
);

export default Login;
