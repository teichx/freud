import { ComponentProps } from 'react';

import { IconButton as ChakraUiIconButton } from '@chakra-ui/react';

export const IconButton = (
  props: ComponentProps<typeof ChakraUiIconButton>
) => (
  <ChakraUiIconButton
    size='sm'
    fontSize='xl'
    bg='transparent'
    {...props}
    _hover={{
      bg: 'blackAlpha.100',
      ...props._hover,
    }}
  />
);
