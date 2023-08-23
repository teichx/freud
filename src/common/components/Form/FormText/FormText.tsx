import { FC } from 'react';

import { FormControl, FormLabel, Input, InputGroup } from '@chakra-ui/react';
import { Field } from 'react-final-form';

import { FormHelperText } from '../FormHelperText';
import { handlerProps } from '../handlers';
import { TextareaStyled } from './styles';
import { FormTextProps } from './types';

export const FormText: FC<FormTextProps> = ({
  name,
  size,
  label,
  noOfLines,
  helperText,
  isTextArea,
  inputProps: { defaultValue, type, ...inputProps } = {},
  unForceHelperText,
  fieldProps,
  InputLeftElement,
  InputRightElement,
  ...props
}: FormTextProps) => {
  const InputComponent = isTextArea ? TextareaStyled : Input;

  return (
    <Field<string | undefined>
      name={name}
      type={type}
      defaultValue={defaultValue}
      {...(fieldProps || {})}
      render={({ input, meta }) => (
        <FormControl
          {...props}
          as='fieldset'
          size={size}
          isInvalid={props.isInvalid || (meta.invalid && meta.touched)}
          isDisabled={props.isDisabled}
        >
          <FormLabel htmlFor={name} as='legend' size={size}>
            {label}
          </FormLabel>

          <InputGroup>
            {InputLeftElement}

            <InputComponent
              {...inputProps}
              {...input}
              {...handlerProps(input, inputProps)}
              value={input.value || ''}
              size={size}
              variant='outline'
              noOfLines={noOfLines}
            />

            {InputRightElement}
          </InputGroup>

          <FormHelperText
            meta={meta}
            helperText={helperText}
            unForceHelperText={unForceHelperText}
          />
        </FormControl>
      )}
    />
  );
};
