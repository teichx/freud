import { Avatar as ChakraUiAvatarBase, styled } from '@chakra-ui/react';

export const ChakraUiAvatar = styled(ChakraUiAvatarBase, {
  baseStyle: {
    borderRadius: '50%',
    img: {
      top: 0,
      left: 0,
      position: 'absolute',
      borderRadius: '50%',
    },
  },
});
