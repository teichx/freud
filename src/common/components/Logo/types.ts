import { BoxProps } from '@chakra-ui/react';

import { LOGO_HEIGHT } from './constants';

export type LogoProps = BoxProps & {
  size?: LogoSizes;
  variant?: LogoVariants;
};

export type LogoSizes = keyof typeof LOGO_HEIGHT;

export type LogoVariants = 'icon' | 'full';

export type LogoItemProps = {
  size: LogoSizes;
};
