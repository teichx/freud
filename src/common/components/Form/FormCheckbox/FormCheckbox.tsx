import { FC } from 'react';

import { Checkbox } from '@chakra-ui/react';
import { Field } from 'react-final-form';

import { FormCheckboxProps } from './types';

export const FormCheckbox: FC<FormCheckboxProps> = ({
  name,
  label,
  isDisabled,
  defaultChecked,
  ...props
}) => (
  <Field<boolean>
    name={name}
    type='checkbox'
    defaultValue={defaultChecked}
    render={({ input, meta }) => (
      <Checkbox
        {...props}
        name={input.name}
        type={input.type}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        checked={input.checked}
        isDisabled={isDisabled}
        isInvalid={meta.invalid}
        isChecked={input.checked}
        onChange={input.onChange}
        defaultChecked={defaultChecked}
      >
        {label}
      </Checkbox>
    )}
  />
);
