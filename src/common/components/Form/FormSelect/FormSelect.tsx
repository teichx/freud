import { FC, useEffect, useRef } from 'react';

import { FormControl, FormLabel } from '@chakra-ui/react';
import { useField } from '@unform/core';
import { Select } from 'chakra-react-select';

import { getSelectOptions } from './constants';
import { FormHelperTextStyled } from './styles';
import { FormSelectOptionProps, FormSelectProps } from './types';

export const FormSelect: FC<FormSelectProps> = ({
  size,
  name,
  label,
  helperText,
  isDisabled,
  options = [],
  selectOptions = {},
  ...props
}) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const initialValue = inputRef.current
    ? undefined
    : getSelectOptions({ value: defaultValue, options });

  useEffect(() => {
    registerField<FormSelectOptionProps[]>({
      name: fieldName,
      ref: inputRef.current,
      getValue: (currentRef) =>
        currentRef.getValue().map((x: FormSelectOptionProps) => x.value),
      clearValue: (currentRef) => currentRef.clearValue(),
      setValue: (currentRef, value) => currentRef.setValue(value),
    });
  }, [fieldName, registerField]);

  return (
    <FormControl
      {...props}
      size={size}
      isInvalid={!!error}
      isDisabled={isDisabled}
    >
      <FormLabel>{label}</FormLabel>

      <Select
        {...selectOptions}
        name={name}
        ref={inputRef}
        options={options}
        defaultValue={initialValue}
      />

      <FormHelperTextStyled fontSize={size}>
        {error || helperText || '‎'}
      </FormHelperTextStyled>
    </FormControl>
  );
};
