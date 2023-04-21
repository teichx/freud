import { FC, useEffect, useRef } from 'react';

import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useField } from '@unform/core';
import { useIMask, IMask } from 'react-imask';

import { FormHelperTextStyled, TextareaStyled } from './styles';
import { FormTextProps, FormTextTextAreaProps } from './types';

export const FormText: FC<FormTextProps> = ({
  name,
  size,
  label,
  helperText,
  isTextArea,
  inputProps = {},
  mask = { mask: '' },
  ...props
}: FormTextProps) => {
  const unmaskedRef = useRef<undefined | string>(undefined);
  const { ref } = useIMask<IMask.AnyMaskedOptions, HTMLInputElement>(
    typeof mask === 'object' ? { lazy: false, ...mask } : mask,
    {
      onAccept: (_, { unmaskedValue }) => (unmaskedRef.current = unmaskedValue),
    }
  );
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: ref.current,
      getValue: (currentRef) =>
        unmaskedRef.current === undefined
          ? currentRef.value
          : unmaskedRef.current,
      setValue: (currentRef, value) => currentRef.setInputValue(value),
      clearValue: (currentRef) => currentRef.setInputValue(''),
    });
  }, [ref, fieldName, registerField]);

  const InputComponent = isTextArea ? TextareaStyled : Input;

  return (
    <FormControl {...props} as='fieldset' size={size}>
      <FormLabel htmlFor={name} as='legend' size={size}>
        {label}
      </FormLabel>

      <InputComponent
        ref={ref}
        name={name}
        size={size}
        variant='outline'
        defaultValue={defaultValue}
        noOfLines={(props as FormTextTextAreaProps).noOfLines}
        {...inputProps}
      />

      <FormHelperTextStyled fontSize={size}>
        {error || helperText || '‎'}
      </FormHelperTextStyled>
    </FormControl>
  );
};
