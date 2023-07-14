import { extendTheme, StyleFunctionProps, Theme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme = {
  colors: {
    book: {
      darkBlue: {
        100: '#6b7389',
        200: '#525b75',
        300: '#394461',
        400: '#212c4e',
        500: '#08153A',
        600: '#071334',
        700: '#06112e',
        800: '#060f29',
        900: '#050d23',
      },
      navyBlue: {
        100: '#6d79a3',
        200: '#546293',
        300: '#3c4c84',
        400: '#233574',
        500: '#0B1F65',
        600: '#0a1c5b',
        700: '#091951',
        800: '#081647',
        900: '#07133d',
      },
      royalBlue: {
        100: '#7c86e8',
        200: '#6672e4',
        300: '#515de1',
        400: '#3b49dd',
        500: '#2535D9',
        600: '#2130c3',
        700: '#1e2aae',
        800: '#1a2598',
        900: '#162082',
      },
      desertSun: {
        100: '#d9bb80',
        200: '#d3af6b',
        300: '#cda456',
        400: '#c69841',
        500: '#C08D2C',
        600: '#ad7f28',
        700: '#9a7123',
        800: '#86631f',
        900: '#73551a',
      },
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode('blackAlpha.200', 'gray.800')(props),
        '*, *::before, ::after': {
          borderColor: mode('blackAlpha.400', 'whiteAlpha.400')(props),
        },
      },
    }),
  },
} as const;

export const CustomTheme = extendTheme(theme);

export type CustomThemeProps = typeof theme;

export type ThemeProps = Theme & CustomThemeProps;

export type HavingThemeProps = { theme: ThemeProps };
