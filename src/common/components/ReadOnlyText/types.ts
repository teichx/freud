import { FormControlProps, InputProps } from '@chakra-ui/react';

export type ReadOnlyTextInputProps = {
  isTextArea?: false;
};

export type ReadOnlyTextTextAreaProps = {
  isTextArea: true;
  noOfLines?: number;
};

export type ReadOnlyTextProps = {
  helperText?: string;
  label?: string | null;
  value?: string | number;
  unForceHelperText?: true;
  children?: undefined;
} & Pick<FormControlProps, 'isRequired' | 'isInvalid' | 'isTruncated' | 'w'> &
  Pick<InputProps, 'size'> &
  (ReadOnlyTextInputProps | ReadOnlyTextTextAreaProps);
