import { FC } from 'react';

import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { Field } from 'react-final-form';

import { handlerProps } from '../handlers';
import { FormHelperTextStyled, TextareaStyled } from './styles';
import { FormTextProps, FormTextTextAreaProps } from './types';

export const FormText: FC<FormTextProps> = ({
  name,
  size,
  label,
  helperText,
  isTextArea,
  inputProps: { defaultValue, type, ...inputProps } = {},
  unForceHelperText,
  ...props
}: FormTextProps) => {
  const InputComponent = isTextArea ? TextareaStyled : Input;

  return (
    <Field<string | undefined>
      name={name}
      type={type}
      defaultValue={`${defaultValue || ''}`}
      render={({ input, meta }) => (
        <FormControl
          {...props}
          as='fieldset'
          size={size}
          isInvalid={props.isInvalid || meta.invalid}
          isDisabled={props.isDisabled}
        >
          <FormLabel htmlFor={name} as='legend' size={size}>
            {label}
          </FormLabel>

          <InputComponent
            {...inputProps}
            {...input}
            {...handlerProps(input, inputProps)}
            size={size}
            variant='outline'
            noOfLines={(props as FormTextTextAreaProps).noOfLines}
          />

          <FormHelperTextStyled fontSize={size}>
            {meta.error || helperText || unForceHelperText ? undefined : '‎'}
          </FormHelperTextStyled>
        </FormControl>
      )}
    />
  );
};
