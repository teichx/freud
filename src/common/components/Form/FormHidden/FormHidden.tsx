import { FC, useEffect, useRef } from 'react';

import { Hide, Input } from '@chakra-ui/react';
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
      setValue: (ref, value) => {
        ref.value = value;
      },
      clearValue: (ref) => {
        ref.value = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <Hide>
      <Input
        name={name}
        ref={inputRef}
        isInvalid={!!error}
        defaultValue={defaultValueParam || defaultValue}
      />
    </Hide>
  );
};
