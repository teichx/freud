import { BoxProps } from '@chakra-ui/react';

export type LogoProps = BoxProps & {
  size?: LogoSizes;
  variant?: LogoVariants;
};

export type LogoSizes = 'small' | 'medium' | 'large';

export type LogoVariants = 'icon' | 'text' | 'full';

export type LogoTextProps = {
  size: LogoSizes;
  variant: LogoVariants;
};

export type LogoItemProps = {
  size: LogoSizes;
};
