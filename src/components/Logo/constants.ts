import { LogoVariants } from './types';

export const LOGO_TEXT = {
  logo: 'Freud',
  character: 'F',
} as const;

export const ICON_SIZE = {
  small: 36,
  medium: 50,
  large: 64,
} as const;

export const VARIANTS_WITH_ICON: LogoVariants[] = ['icon', 'full'];

export const VARIANTS_WITH_TEXT: LogoVariants[] = ['text', 'full'];

export const ICON_PADDING_SIZE = {
  small: '4px',
  medium: '4px 10px',
  large: '8px',
} as const;

export const PADDING_SIZE = {
  small: '2px',
  medium: '4px',
  large: '8px',
} as const;

export const MARGIN_SIZE = {
  small: '-44px',
  medium: '-44px',
  large: '-56px',
} as const;

export const ICON_MARGIN_SIZE = {
  small: '-32px',
  medium: '-40px',
  large: '-56px',
} as const;

export const WIDTH_SIZE = {
  small: '28px',
  medium: '28px',
  large: '28px',
} as const;

export const ICON_WIDTH_SIZE = {
  small: '28px',
  medium: '28px',
  large: '28px',
} as const;

export const FONT_SIZE = {
  small: '24px',
  medium: '32px',
  large: '36px',
} as const;
