import { ReactElement } from 'react';

import { FormControlProps, InputProps } from '@chakra-ui/react';
import { UseFieldConfig } from 'react-final-form';
import { IMask } from 'react-imask';

export type FormTextInputProps = {
  isTextArea?: false;
};

export type FormTextTextAreaProps = {
  isTextArea: true;
};

export type FormTextProps = {
  name: string;
  helperText?: string;
  label?: string | null;
  inputProps?: Omit<InputProps, 'defaultValue'> & {
    defaultValue?: string;
  };
  unForceHelperText?: true;
  InputLeftElement?: ReactElement;
  InputRightElement?: ReactElement | null;
  mask?: IMask.AnyMaskedOptions;
  fieldProps?: Omit<
    UseFieldConfig<string | undefined>,
    'name' | 'type' | 'defaultValue'
  >;
} & Pick<
  FormControlProps,
  'isRequired' | 'isDisabled' | 'isInvalid' | 'isReadOnly' | 'isTruncated' | 'w'
> &
  Pick<InputProps, 'size'> &
  (FormTextInputProps | FormTextTextAreaProps);
