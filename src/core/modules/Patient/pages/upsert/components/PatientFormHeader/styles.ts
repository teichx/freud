import { Box, styled } from '@chakra-ui/react';

import { HavingThemeProps } from '~/common/themes/CustomTheme';

export const StickHeader = styled(Box, {
  baseStyle: ({ theme }: HavingThemeProps) => ({
    top: 0,
    position: 'sticky',
    pt: theme.space[4],
    mb: theme.space[6],
    zIndex: theme.zIndices.sticky,
    backgroundColor: theme.colors.gray[200],
    boxShadow: `0 0 16px 16px ${theme.colors.gray[200]}`,
    _dark: {
      backgroundColor: theme.colors.gray[800],
      boxShadow: `0 0 16px 16px ${theme.colors.gray[800]}`,
    },
  }),
});
