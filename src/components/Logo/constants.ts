import { LogoVariants } from './types';

export const LOGO_TEXT = {
  logo: 'Freud',
} as const;

export const ICON_WIDTH = {
  small: 36,
  medium: 50,
  large: 60,
} as const;

export const VARIANTS_WITH_ICON: LogoVariants[] = ['icon', 'full'];

export const VARIANTS_WITH_TEXT: LogoVariants[] = ['text', 'full'];

export const FONT_SIZE = {
  small: '24px',
  medium: '32px',
  large: '36px',
} as const;

export const SVG_LOGO_SIZE = {
  width: 580,
  height: 383,
} as const;
