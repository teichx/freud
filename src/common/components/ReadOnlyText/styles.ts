import { FormHelperText, Textarea, styled } from '@chakra-ui/react';

export const TextareaStyled = styled(Textarea, {
  baseStyle: {
    display: 'flex',
    alignSelf: 'stretch',
    flexDirection: 'column',
  },
});

export const FormHelperTextStyled = styled(FormHelperText, {
  baseStyle: {
    width: '100%',
  },
});
