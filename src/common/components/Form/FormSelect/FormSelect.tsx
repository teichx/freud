import { FC } from 'react';

import { FormControl, FormLabel } from '@chakra-ui/react';
import { Select } from 'chakra-react-select';
import { Field } from 'react-final-form';

import {
  formatFormSelect,
  getSelectOptions,
  parseFormSelect,
} from './functions';
import { FormHelperTextStyled } from './styles';
import { FormSelectOptionProps, FormSelectProps } from './types';

export const FormSelect: FC<FormSelectProps> = ({
  size,
  name,
  label,
  helperText,
  isDisabled,
  defaultValue,
  options = [],
  unForceHelperText,
  selectOptions = {},
  ...props
}) => (
  <Field<FormSelectOptionProps['value'][], HTMLElement, FormSelectOptionProps[]>
    multiple
    name={name}
    defaultValue={getSelectOptions({ value: defaultValue, options })}
    format={formatFormSelect(options)}
    parse={parseFormSelect}
    render={({ input, meta }) => (
      <FormControl
        {...props}
        size={size}
        isInvalid={meta.invalid}
        isDisabled={isDisabled}
      >
        <FormLabel>{label}</FormLabel>

        <Select
          {...selectOptions}
          {...input}
          onBlur={(...values) => {
            if (selectOptions?.onBlur) {
              selectOptions.onBlur(...values);
            }
            input.onBlur(...values);
          }}
          onChange={(...values) => {
            if (selectOptions?.onChange) {
              selectOptions.onChange(...values);
            }
            input.onChange(values[0]);
          }}
          onFocus={(...values) => {
            if (selectOptions?.onFocus) {
              selectOptions.onFocus(...values);
            }
            input.onFocus(...values);
          }}
          options={options}
        />

        <FormHelperTextStyled fontSize={size}>
          {meta.error || helperText || unForceHelperText ? undefined : '‎'}
        </FormHelperTextStyled>
      </FormControl>
    )}
  />
);
