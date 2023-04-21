import { FC } from 'react';

import { FormControl, FormLabel, Input } from '@chakra-ui/react';

import { FormHelperTextStyled, TextareaStyled } from './styles';
import { FormTextProps, FormTextTextAreaProps } from './types';

export const FormText: FC<FormTextProps> = ({
  name,
  size,
  label,
  helperText,
  isTextArea,
  inputProps = {},
  ...props
}: FormTextProps) => (
  <FormControl {...props} as='fieldset' size={size}>
    <FormLabel htmlFor={name} as='legend' size={size}>
      {label}
    </FormLabel>
    {isTextArea ? (
      <TextareaStyled
        size={size}
        variant='outline'
        noOfLines={(props as FormTextTextAreaProps).noOfLines}
        {...inputProps}
      />
    ) : (
      <Input size={size} variant='outline' {...inputProps} />
    )}

    <FormHelperTextStyled fontSize={size}>
      {helperText || '‎'}
    </FormHelperTextStyled>
  </FormControl>
);
