import { extendTheme, ThemeOverride } from '@chakra-ui/react';

const theme = {
  colors: {
    book: {
      darkBlue: {
        100: '#08153A',
        200: '#08153A',
        300: '#08153A',
        400: '#08153A',
        500: '#08153A',
        600: '#08153A',
        700: '#08153A',
        800: '#08153A',
        900: '#08153A',
      },
      navyBlue: {
        100: '#0B1F65',
        200: '#0B1F65',
        300: '#0B1F65',
        400: '#0B1F65',
        500: '#0B1F65',
        600: '#0B1F65',
        700: '#0B1F65',
        800: '#0B1F65',
        900: '#0B1F65',
      },
      royalBlue: {
        100: '#2535D9',
        200: '#2535D9',
        300: '#2535D9',
        400: '#2535D9',
        500: '#2535D9',
        600: '#2535D9',
        700: '#2535D9',
        800: '#2535D9',
        900: '#2535D9',
      },
      desertSun: {
        100: '#C08D2C',
        200: '#C08D2C',
        300: '#C08D2C',
        400: '#C08D2C',
        500: '#C08D2C',
        600: '#C08D2C',
        700: '#C08D2C',
        800: '#C08D2C',
        900: '#C08D2C',
      },
    },
  },
} as const;

export const CustomTheme = extendTheme(theme);

export type CustomThemeProps = typeof theme;

export type ThemeProps = ThemeOverride & CustomThemeProps;

export type HavingThemeProps = { theme?: CustomThemeProps };
