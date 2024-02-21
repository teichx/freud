import { FC } from 'react';

import { InputHelperText } from '../../Input';
import { FormHelperTextProps } from './types';

export const FormHelperText: FC<FormHelperTextProps> = ({
  meta,
  helperText,
  unForceHelperText,
}) => (
  <InputHelperText
    unForceHelperText={unForceHelperText}
    helperText={(meta?.touched ? meta?.error : undefined) || helperText}
  />
);
