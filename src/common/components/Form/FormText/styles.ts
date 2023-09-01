import { Textarea, styled } from '@chakra-ui/react';

export const TextareaStyled = styled(Textarea, {
  baseStyle: {
    display: 'flex',
    overflowY: 'hidden',
    alignSelf: 'stretch',
    flexDirection: 'column',
  },
});
