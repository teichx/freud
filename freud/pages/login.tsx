import { useState } from 'react';

import { Flex } from '@chakra-ui/react';

import { GoogleLogin, JWTTokenProps } from 'components/GoogleLogin';

export const Login = () => {
  const [, setState] = useState<JWTTokenProps>();

  return (
    <Flex height='100vh' alignItems='center' justifyContent='center'>
      <GoogleLogin
        handleLogin={(event) => {
          setState(event);
        }}
      />
    </Flex>
  );
};

export default Login;
