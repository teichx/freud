import { BoxProps } from '@chakra-ui/react';

import { ICON_WIDTH } from './constants';

export type LogoProps = BoxProps & {
  size?: LogoSizes;
  variant?: LogoVariants;
};

export type LogoSizes = keyof typeof ICON_WIDTH;

export type LogoVariants = 'icon' | 'text' | 'full';

export type LogoItemProps = {
  size: LogoSizes;
};
