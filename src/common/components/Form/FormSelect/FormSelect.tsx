import { FormControl, FormLabel } from '@chakra-ui/react';
import { Select } from 'chakra-react-select';
import { Field } from 'react-final-form';

import {
  formatFormSelect,
  getSelectOptions,
  parseFormSelect,
} from './functions';
import { FormHelperTextStyled } from './styles';
import {
  FormSelectOptionOrValue,
  FormSelectOptionProps,
  FormSelectProps,
} from './types';

export function FormSelect<IsMulti extends boolean = false>({
  size,
  name,
  label,
  helperText,
  isDisabled,
  defaultValue,
  options = [],
  unForceHelperText,
  selectOptions = {},
  isMulti,
  ...props
}: FormSelectProps<IsMulti>) {
  return (
    <Field<
      FormSelectOptionOrValue | FormSelectOptionOrValue[],
      HTMLElement,
      FormSelectOptionProps[]
    >
      name={name}
      multiple={isMulti}
      defaultValue={getSelectOptions({ value: defaultValue, options, isMulti })}
      format={formatFormSelect(options)}
      parse={parseFormSelect(isMulti)}
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
            isMulti={isMulti}
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
}
