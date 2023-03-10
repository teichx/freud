import { Button, Theme } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const HeaderButton = styled(Button)(
  ({ selected, theme }: { theme?: Theme; selected: boolean }) => ({
    height: 'auto',
    paddingLeft: theme?.space[4],
    paddingRight: theme?.space[4],
    paddingTop: theme?.space[2],
    paddingBottom: theme?.space[2],
    borderRadius: 0,
    backgroundColor: selected
      ? theme?.colors.whiteAlpha[300]
      : theme?.colors.transparent,
    ':hover': {
      backgroundColor: theme?.colors.whiteAlpha[400],
    },
  })
);
