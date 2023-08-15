import { IconButton, keyframes, styled } from '@chakra-ui/react';

import { HavingThemeProps } from '~/common/themes/CustomTheme';

const ripple = keyframes`
  0% {
    opacity: 0;
  }
  35% {
    opacity: .5;
  }
  100% {
    opacity: 0;
    transform: scale(2);
  }
`;

export const IconButtonStyled = styled(IconButton, {
  baseStyle: ({ theme, ...rest }: HavingThemeProps) => {
    console.log({ theme, ...rest });
    return {
      position: 'relative',
      color: theme.colors.white,
      borderRadius: theme.radii.full,
      zIndex: theme.zIndices.tooltip,
      backgroundColor: theme.colors.book.desertSun[500],
      '::before': {
        content: '""',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        position: 'absolute',
        pointerEvents: 'none',
        animationDuration: '1.75s',
        borderRadius: theme.radii.full,
        animationIterationCount: 'infinite',
        backgroundColor: theme.colors.whiteAlpha[400],
        animationTimingFunction: theme.transition.easing['ease-in-out'],
        animationName: `${ripple}`,
      },
      '&[data-ripple="false"]::before': {
        visibility: 'hidden',
      },
      _hover: {
        backgroundColor: theme.colors.book.desertSun[600],
      },
      _dark: {
        backgroundColor: theme.colors.book.desertSun[300],
        _hover: {
          backgroundColor: theme.colors.book.desertSun[400],
        },
      },
    };
  },
});
