import { Tr, Th, TableContainer, IconButton, styled } from '@chakra-ui/react';

import { HavingThemeProps } from '~/common/themes/CustomTheme';

export const StyledTheadTr = styled(Tr, {
  baseStyle: ({ theme }: HavingThemeProps) => ({
    bgColor: theme.colors.book.desertSun[400],
    _dark: {
      bgColor: theme.colors.book.navyBlue[500],
    },
  }),
});

export const StyledTheadTh = styled(Th, {
  baseStyle: ({ theme }: HavingThemeProps) => ({
    color: theme.colors.blackAlpha[800],
    _dark: {
      color: theme.colors.whiteAlpha[800],
    },
  }),
});

export const StyledTableContainer = styled(TableContainer, {
  baseStyle: ({ theme }: HavingThemeProps) => ({
    borderWidth: 1,
    borderRadius: theme.radii.md,
  }),
});

export const FooterIconButton = styled(IconButton, {
  baseStyle: ({ theme }: HavingThemeProps) => ({
    bg: theme.colors.blackAlpha[300],
    _disabled: {
      bg: theme.colors.blackAlpha[200],
    },
    _hover: {
      _disabled: {
        bg: theme.colors.blackAlpha[200],
      },
      bg: theme.colors.blackAlpha[500],
    },
    _dark: {
      bg: theme.colors.whiteAlpha[300],
      _disabled: {
        bg: theme.colors.whiteAlpha[200],
      },
      _hover: {
        _disabled: {
          bg: theme.colors.whiteAlpha[200],
        },
        bg: theme.colors.whiteAlpha[400],
      },
    },
  }),
});
