import { FC, useEffect, useRef } from 'react';

import { Input } from '@chakra-ui/react';
import { useField } from '@unform/core';

import { FormHiddenProps } from './types';

export const FormHidden: FC<FormHiddenProps> = ({
  name,
  defaultValue: defaultValueParam,
}) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField<string | boolean>({
      name: fieldName,
      ref: inputRef.current,
      getValue: (ref) => ref.value,
      setValue: (ref, value) => ref.setInputValue(value),
      clearValue: (ref) => ref.setInputValue(''),
    });
  }, [fieldName, registerField]);

  return (
    <Input
      name={name}
      type='hidden'
      ref={inputRef}
      isInvalid={!!error}
      defaultValue={defaultValueParam || defaultValue}
    />
  );
};
