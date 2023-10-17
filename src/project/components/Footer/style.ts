import { HStack, styled } from '@chakra-ui/react';

export const StyledHStack = styled(HStack, {
  baseStyle: () => ({
    py: '2',
    columnGap: '1',
    '> *': {
      marginInlineStart: '0 !important',
    },
  }),
});
