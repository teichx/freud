import { Box, Spinner } from '@chakra-ui/react';

export const PageLoader = () => (
  <Box
    minHeight='100vh'
    display='flex'
    alignItems='center'
    justifyContent='center'
  >
    <Spinner size='xl' />
  </Box>
);
