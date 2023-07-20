import { FC } from 'react';

import { FormHelperTextStyled } from './styles';
import { FormHelperTextProps } from './types';

export const FormHelperText: FC<FormHelperTextProps> = ({
  error,
  helperText,
  unForceHelperText,
}) =>
  error || helperText || !unForceHelperText ? (
    <FormHelperTextStyled>{error || helperText || '‎'}</FormHelperTextStyled>
  ) : null;
