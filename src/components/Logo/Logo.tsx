import { FC } from 'react';

import { Box } from '@chakra-ui/react';

import { expletusSans } from '~/fonts';

import {
  ICON_SIZE,
  LOGO_TEXT,
  VARIANTS_WITH_ICON,
  VARIANTS_WITH_TEXT,
} from './constants';
import { LogoText } from './styles';
import { LogoProps } from './types';

export const Logo: FC<LogoProps> = ({
  variant = 'icon',
  size = 'small',
  ...props
}) => (
  <Box {...props}>
    <Box display='flex' justifyContent='start' alignItems='center'>
      {VARIANTS_WITH_ICON.includes(variant) && (
        <Box
          w={`${ICON_SIZE[size]}px`}
          h={`${ICON_SIZE[size]}px`}
          bg='book.desertSun.100'
        />
      )}

      <LogoText
        size={size}
        variant={variant}
        className={expletusSans.className}
      >
        {VARIANTS_WITH_TEXT.includes(variant)
          ? LOGO_TEXT.logo
          : LOGO_TEXT.character}
      </LogoText>
    </Box>
  </Box>
);
