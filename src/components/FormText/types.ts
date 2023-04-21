import { FormControlProps, InputProps } from '@chakra-ui/react';

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
} & Pick<
  FormControlProps,
  'isRequired' | 'isDisabled' | 'isInvalid' | 'isReadOnly' | 'isTruncated' | 'w'
> &
  Pick<InputProps, 'size'> &
  (FormTextInputProps | FormTextTextAreaProps);
