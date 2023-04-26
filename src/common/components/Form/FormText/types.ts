import { FormControlProps, InputProps } from '@chakra-ui/react';
import { IMask } from 'react-imask';

export type FormTextInputProps = {
  isTextArea?: false;
};

export type FormTextTextAreaProps = {
  isTextArea: true;
  noOfLines?: number;
};

export type FormTextProps = {
  name: string;
  label?: string | null;
  helperText?: string;
  inputProps?: InputProps;
  mask?: IMask.AnyMaskedOptions;
} & Pick<
  FormControlProps,
  'isRequired' | 'isDisabled' | 'isInvalid' | 'isReadOnly' | 'isTruncated' | 'w'
> &
  Pick<InputProps, 'size'> &
  (FormTextInputProps | FormTextTextAreaProps);
