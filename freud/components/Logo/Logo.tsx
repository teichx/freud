import { FC } from 'react';

import { Box, HStack, Text } from '@chakra-ui/react';

import { LogoProps, LogoVariants } from './types';

const ICON_SIZE = {
  small: 24,
  medium: 48,
  large: 64,
};

const VARIANTS_WITH_ICON: LogoVariants[] = ['icon', 'full'];

const VARIANTS_WITH_TEXT: LogoVariants[] = ['text', 'full'];

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
          bg='#cc1316'
        />
      )}

      {VARIANTS_WITH_TEXT.includes(variant) && (
        <Box>
          <Text>Freud</Text>
        </Box>
      )}
    </HStack>
  </Box>
);
