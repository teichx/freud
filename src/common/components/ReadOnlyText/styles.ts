import { Textarea, styled } from '@chakra-ui/react';

export const TextareaStyled = styled(Textarea, {
  baseStyle: {
    display: 'flex',
    alignSelf: 'stretch',
    flexDirection: 'column',
  },
});
