import { FieldMetaState } from 'react-final-form';

export type FormHelperTextProps = {
  meta: FieldMetaState<unknown> | undefined;
  helperText: string | undefined;
  unForceHelperText: boolean | undefined;
};
