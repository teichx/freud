import { Box, Text, styled } from '@chakra-ui/react';

import { HavingThemeProps } from '~/common/themes/CustomTheme';

export const SectionWrapper = styled(Box, {
  baseStyle: ({ theme }: HavingThemeProps) => ({
    padding: theme.space[4],
    marginTop: theme.space[4],
    marginBottom: theme.space[4],
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 1,
    borderRadius: theme.radii.md,
    position: 'relative',
    borderColor: theme.colors.book.desertSun[400],
    _dark: {
      borderColor: theme.colors.book.desertSun[500],
    },
  }),
});

export const ChildrenWrapper = styled(Box, {
  baseStyle: ({ theme }: HavingThemeProps) => ({
    padding: theme.space[1],
  }),
});

export const SectionText = styled(Text, {
  baseStyle: ({ theme }: HavingThemeProps) => ({
    padding: `${theme.space[1]} ${theme.space[4]}`,
    borderRadius: theme.radii['2xl'],
    fontWeight: theme.fontWeights.semibold,
    _disabled: {
      backgroundColor: theme.colors.book.royalBlue[500],
    },
    color: theme.colors.blackAlpha[800],
    backgroundColor: theme.colors.book.desertSun[400],
    _dark: {
      color: theme.colors.whiteAlpha[900],
      backgroundColor: theme.colors.book.desertSun[500],
    },
  }),
});
