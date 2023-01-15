import { Avatar as ChakraUiAvatarBase } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const ChakraUiAvatar = styled(ChakraUiAvatarBase)({
  img: {
    top: 0,
    left: 0,
    position: 'absolute',
    borderRadius: '50%',
  },
});
