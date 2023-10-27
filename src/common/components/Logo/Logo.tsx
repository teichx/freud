import { FC } from 'react';

import { Box, Text } from '@chakra-ui/react';

import { expletusSans } from '~/common/fonts';

import {
  FONT_SIZE,
  LOGO_TEXT,
  VARIANTS_WITH_ICON,
  VARIANTS_WITH_TEXT,
} from './constants';
import { LogoItem } from './LogoIcon';
import { LogoProps } from './types';

export const Logo: FC<LogoProps> = ({
  variant = 'full',
  size = 'large',
  ...props
}) => {
  const withIcon = VARIANTS_WITH_ICON.includes(variant);
  const withText = VARIANTS_WITH_TEXT.includes(variant);

  return (
    <Box {...props}>
      <Box display='flex' justifyContent='start' alignItems='center'>
        <Box mr={withText ? 2 : 0}>{withIcon && <LogoItem size={size} />}</Box>

        {withText && (
          <Text
            sx={{
              lineHeight: 1,
              fontSize: FONT_SIZE[size],
              userSelect: 'none',
            }}
            className={expletusSans.className}
          >
            {LOGO_TEXT.logo}
          </Text>
        )}
      </Box>
    </Box>
  );
};
