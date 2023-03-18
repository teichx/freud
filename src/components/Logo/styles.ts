import { Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { HavingThemeProps } from '~/themes/CustomTheme';

import {
  ICON_PADDING_SIZE,
  ICON_MARGIN_SIZE,
  PADDING_SIZE,
  MARGIN_SIZE,
  FONT_SIZE,
  ICON_WIDTH_SIZE,
  WIDTH_SIZE,
} from './constants';
import { LogoTextProps } from './types';

export const LogoText = styled(Text)(
  ({ theme, size, variant }: LogoTextProps & HavingThemeProps) => {
    const { padding, margin, width } =
      variant === 'icon'
        ? {
            padding: ICON_PADDING_SIZE,
            margin: ICON_MARGIN_SIZE,
            width: ICON_WIDTH_SIZE,
          }
        : { padding: PADDING_SIZE, margin: MARGIN_SIZE, width: WIDTH_SIZE };

    return {
      lineHeight: 1,
      padding: padding[size],
      marginLeft: margin[size],
      width: width[size],
      backgroundColor: theme?.colors.book.darkBlue[500],
      fontSize: FONT_SIZE[size],
    };
  }
);
