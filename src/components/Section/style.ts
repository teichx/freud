import { Box, BoxProps, ComponentWithAs, Text, styled } from '@chakra-ui/react';

import { HavingThemeProps } from '~/themes/CustomTheme';

import { SectionLoaderProps } from './types';

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

export const SectionLoader = styled<
  ComponentWithAs<'div', BoxProps>,
  SectionLoaderProps
>(Box, {
  baseStyle: ({ theme, ...props }) => {
    const isLoading = (
      props as unknown as SectionLoaderProps & HavingThemeProps
    )['data-is-loading'];

    return {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      transition: `all ${theme.transition.duration.normal}`,
      justifyContent: 'center',
      opacity: isLoading ? 1 : 0,
      backdropFilter: 'blur(6px)',
      visibility: isLoading ? 'visible' : 'hidden',
    };
  },
});
