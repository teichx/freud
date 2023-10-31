import { PropsWithChildren } from 'react';

import { Box, Container, SystemStyleObject } from '@chakra-ui/react';

export const ProjectSectionWrapper = ({
  children,
  sx,
}: PropsWithChildren<{ sx?: SystemStyleObject }>) => (
  <Box
    sx={{
      w: '100%',
      py: ['5%', '5%', '2.5%', '2.5%'],
      ...sx,
    }}
  >
    <Container w='100%' maxW='container.xl'>
      {children}
    </Container>
  </Box>
);
