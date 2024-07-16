import { extendTheme, Theme, ThemeComponents } from '@chakra-ui/react';

const components: ThemeComponents = {
  Tabs: {
    variants: {
      enclosed: () => ({
        tab: {
          _selected: {
            borderBottomColor: 'gray.200',
            _dark: {
              borderBottomColor: 'gray.800',
            },
          },
        },
      }),
    },
  },
  Switch: {
    baseStyle: {
      track: {
        _checked: {
          bg: 'book.desertSun.400',
        },
      },
      thumb: {
        _dark: {
          bg: 'gray.700',
        },
      },
    },
  },
  Skeleton: {
    baseStyle: {
      borderRadius: 'base',
    },
  },
};

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
  components,
  styles: {
    global: {
      '&::-webkit-scrollbar': {
        width: '6px',
        bg: 'blackAlpha.700',
      },
      '&::-webkit-scrollbar-track': {
        width: '6px',
      },
      '&::-webkit-scrollbar-thumb': {
        background: 'book.desertSun.400',
        borderRadius: 6,
      },
      html: {
        height: '100%',
        width: '100%',
      },
      form: {
        width: '100%',
      },
      body: {
        height: '100%',
        width: '100%',
        bg: 'gray.200',
        overflowX: 'hidden',
        color: 'gray.800',
        '*, *::before, ::after': {
          borderColor: 'blackAlpha.400',
        },
        _dark: {
          bg: 'gray.800',
          color: 'gray.200',
          '*, *::before, ::after': {
            borderColor: 'whiteAlpha.400',
          },
        },
      },
    },
  },
} as const;

export const CustomTheme = extendTheme(theme) as ThemeProps;

export type CustomThemeProps = typeof theme;

export type ThemeProps = Theme & CustomThemeProps;

export type HavingThemeProps = { theme: ThemeProps };
