import { extendTheme, ThemeOverride } from '@chakra-ui/react';

const theme = {
  colors: {
    book: {
      darkBlue: '#08153A',
      navyBlue: '#0B1F65',
      royalBlue: '#2535D9',
      desertSun: '#C08D2C',
    },
  },
} as const;

export const CustomTheme = extendTheme(theme);

export type CustomThemeProps = typeof theme;

export type ThemeProps = ThemeOverride & CustomThemeProps;

export type HavingThemeProps = { theme?: CustomThemeProps };
