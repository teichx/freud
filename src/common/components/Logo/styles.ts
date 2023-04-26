import {
  Box,
  ComponentWithAs,
  Icon,
  IconProps,
  Text,
  styled,
} from '@chakra-ui/react';

import { HavingThemeProps } from '~/common/themes/CustomTheme';

import { FONT_SIZE, ICON_WIDTH, SVG_LOGO_SIZE } from './constants';
import { LogoItemProps, LogoTextProps } from './types';

export const LogoText = styled(Text, {
  baseStyle: (props) => {
    const { size } = props as unknown as LogoTextProps;

    return {
      lineHeight: 1,
      fontSize: FONT_SIZE[size],
      userSelect: 'none',
    };
  },
});

export const LogoIconStyled = styled<
  ComponentWithAs<'svg', IconProps>,
  LogoItemProps
>(Icon, {
  baseStyle: (props) => {
    const { size, theme } = props as unknown as HavingThemeProps &
      LogoItemProps;

    return {
      width: `${ICON_WIDTH[size]}px`,
      height: `${
        (SVG_LOGO_SIZE.height / SVG_LOGO_SIZE.width) * ICON_WIDTH[size]
      }px`,
      '.color-1': {
        fill: theme.colors.book.desertSun[500],
      },
      '.color-2': {
        fill: theme.colors.white,
      },
    };
  },
});

export const Wrapper = styled(Box, {
  baseStyle: {
    cursor: 'default',
  },
});
