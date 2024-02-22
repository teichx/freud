import { PropsWithChildren } from 'react';

import { Box } from '@chakra-ui/react';

export default function OldLayout({ children }: PropsWithChildren) {
  return (
    <Box
      px={{
        base: 4,
        md: 8,
      }}
      py='4'
    >
      {children}
    </Box>
  );
}
