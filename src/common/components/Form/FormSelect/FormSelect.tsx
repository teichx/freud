import { FC, useEffect, useRef } from 'react';

import { FormControl, FormLabel } from '@chakra-ui/react';
import { useField } from '@unform/core';
import { Select, SelectInstance } from 'chakra-react-select';

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
  unForceHelperText,
  selectOptions = {},
  defaultValue: defaultValueParam,
  ...props
}) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const initialValue = inputRef.current
    ? undefined
    : getSelectOptions({ value: defaultValueParam || defaultValue, options });

  useEffect(() => {
    registerField<FormSelectOptionProps['value'][]>({
      name: fieldName,
      ref: inputRef.current,
      getValue: (currentRef: SelectInstance<FormSelectOptionProps>) =>
        currentRef.getValue().map((x) => x.value),
      clearValue: (currentRef: SelectInstance) => currentRef.clearValue(),
      setValue: (
        currentRef: SelectInstance<FormSelectOptionProps, true>,
        value
      ) => {
        const currentOptions = currentRef.getCommonProps()
          .options as FormSelectOptionProps[];

        const selected = getSelectOptions({
          value,
          options: currentOptions,
        });
        currentRef.setValue(selected, 'select-option');
      },
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
        {error || helperText || unForceHelperText ? undefined : '‎'}
      </FormHelperTextStyled>
    </FormControl>
  );
};
