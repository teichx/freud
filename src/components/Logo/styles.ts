import { Icon, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { HavingThemeProps } from '~/themes/CustomTheme';

import { FONT_SIZE, ICON_WIDTH, SVG_LOGO_SIZE } from './constants';
import { LogoItemProps, LogoTextProps } from './types';

export const LogoText = styled(Text)(({ size }: LogoTextProps) => ({
  lineHeight: 1,
  fontSize: FONT_SIZE[size],
}));

export const LogoIconStyled = styled(Icon)(
  ({ size, theme }: HavingThemeProps & LogoItemProps) => ({
    width: ICON_WIDTH[size],
    height: (SVG_LOGO_SIZE.height / SVG_LOGO_SIZE.width) * ICON_WIDTH[size],
    '.color-1': {
      fill: theme?.colors.book.desertSun[500],
    },
    '.color-2': {
      fill: theme?.colors.white?.toString(),
    },
  })
);
