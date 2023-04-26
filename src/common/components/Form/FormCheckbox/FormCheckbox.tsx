import { FC, useEffect, useRef } from 'react';

import { Checkbox } from '@chakra-ui/react';
import { useField } from '@unform/core';

import { FormCheckboxProps } from './types';

export const FormCheckbox: FC<FormCheckboxProps> = ({
  size,
  name,
  label,
  value: inputValue,
  ...props
}) => {
  const inputRef = useRef(null);
  const inputValueRef = useRef(inputValue);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField<string | boolean>({
      name: fieldName,
      ref: inputRef.current,
      getValue: (ref) => {
        if (inputValueRef.current)
          return ref.checked ? inputValueRef.current : undefined;

        return ref.checked;
      },
      setValue: (ref, value) => ref.setInputValue(value),
      clearValue: (ref) => ref.setInputValue(''),
    });
  }, [fieldName, registerField]);

  return (
    <Checkbox
      {...props}
      name={name}
      size={size}
      ref={inputRef}
      isInvalid={!!error}
      defaultChecked={!!defaultValue}
    >
      {label}
    </Checkbox>
  );
};
