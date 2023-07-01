import { Box, BoxProps, ComponentWithAs, styled } from '@chakra-ui/react';

import { HavingThemeProps } from '~/common/themes/CustomTheme';

import { LoaderStyledProps } from './types';

export const StyledLoader = styled<
  ComponentWithAs<'div', BoxProps>,
  LoaderStyledProps
>(Box, {
  baseStyle: ({ theme, ...props }) => {
    const isLoading = (
      props as unknown as LoaderStyledProps & HavingThemeProps
    )['data-is-loading'];

    return {
      top: 0,
      left: 0,
      zIndex: 1,
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      justifyContent: 'center',
      opacity: isLoading ? 1 : 0,
      backdropFilter: 'blur(6px)',
      visibility: isLoading ? 'visible' : 'hidden',
      transition: `all ${theme.transition.duration.normal}`,
    };
  },
});
