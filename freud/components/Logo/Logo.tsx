import { FC } from 'react';

import { Box, HStack } from '@chakra-ui/react';

import { LogoText } from './styles';
import { LogoProps, LogoVariants } from './types';

const ICON_SIZE = {
  small: 24,
  medium: 48,
  large: 64,
} as const;

const VARIANTS_WITH_ICON: LogoVariants[] = ['icon', 'full'];

const VARIANTS_WITH_TEXT: LogoVariants[] = ['text', 'full'];

const i18nText = {
  logo: 'Freud',
} as const;

export const Logo: FC<LogoProps> = ({
  variant = 'full',
  size = 'medium',
  ...props
}) => (
  <Box {...props}>
    <HStack alignItems='center'>
      {VARIANTS_WITH_ICON.includes(variant) && (
        <Box
          w={`${ICON_SIZE[size]}px`}
          h={`${ICON_SIZE[size]}px`}
          bg='book.desertSun.100'
        />
      )}

      {VARIANTS_WITH_TEXT.includes(variant) && (
        <LogoText>{i18nText.logo}</LogoText>
      )}
    </HStack>
  </Box>
);
