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
    borderColor: theme.colors.book.desertSun[500],
    borderRadius: theme.space[1],
    position: 'relative',
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
    backgroundColor: theme.colors.book.desertSun[500],
    borderRadius: theme.radii['2xl'],
    fontWeight: theme.fontWeights.bold,
    letterSpacing: 0.48,
  }),
});
