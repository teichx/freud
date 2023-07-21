import { FC } from 'react';

import { FormHelperTextStyled } from './styles';
import { FormHelperTextProps } from './types';

export const FormHelperText: FC<FormHelperTextProps> = ({
  meta,
  helperText,
  unForceHelperText,
}) =>
  meta?.error || helperText || !unForceHelperText ? (
    <FormHelperTextStyled>
      {(meta?.touched ? meta?.error : undefined) || helperText || '‎'}
    </FormHelperTextStyled>
  ) : null;
