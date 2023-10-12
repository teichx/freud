import { FormControl, FormLabel } from '@chakra-ui/react';
import { Field } from 'react-final-form';

import { Select } from '~/common/components/Select';

import { FormHelperText } from '../FormHelperText';
import {
  formatFormSelect,
  getSelectOptions,
  parseFormSelect,
} from './functions';
import {
  FormSelectOptionOrValue,
  FormSelectOptionProps,
  FormSelectProps,
} from './types';
import { useFormSelectOptions } from './useFormSelectOptions';

export function FormSelect<IsMulti extends boolean = false>({
  size,
  name,
  label,
  helperText,
  isDisabled,
  defaultValue,
  options: optionsParam = [],
  optionsKey,
  unForceHelperText,
  selectOptions = {},
  isMulti,
  ...props
}: FormSelectProps<IsMulti>) {
  const { getOptions } = useFormSelectOptions();
  const options = optionsKey ? getOptions(optionsKey) : optionsParam;

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
          isInvalid={meta.invalid && meta.touched}
          isDisabled={isDisabled}
        >
          {label && <FormLabel>{label}</FormLabel>}

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

          <FormHelperText
            meta={meta}
            helperText={helperText}
            unForceHelperText={unForceHelperText}
          />
        </FormControl>
      )}
    />
  );
}
