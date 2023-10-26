'use client';
import { Box } from '@chakra-ui/react';

import { GoogleLogin } from '~/common/components/GoogleLogin';

const Index = () => (
  <Box
    height='100vh'
    width='100vw'
    display='flex'
    alignItems='center'
    justifyContent='center'
  >
    <GoogleLogin />
  </Box>
);

export default Index;
