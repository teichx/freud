import { Box } from '@chakra-ui/react';

import { GoogleLogin } from '~/components/GoogleLogin';

export const Index = () => (
  <Box
    height='100vh'
    width='100vw'
    display='flex'
    alignItems='center'
    justifyContent='center'
  >
    <GoogleLogin radius='large' />
  </Box>
);

export default Index;
