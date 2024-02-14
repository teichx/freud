import { FC } from 'react';

import { InputHelperTextStyled } from './style';
import { InputHelperTextProps } from './types';

export const InputHelperText: FC<InputHelperTextProps> = ({
  helperText,
  unForceHelperText,
}) =>
  unForceHelperText ? null : (
    <InputHelperTextStyled>{helperText || '‎'}</InputHelperTextStyled>
  );
