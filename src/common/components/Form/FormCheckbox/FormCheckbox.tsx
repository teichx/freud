import { FC } from 'react';

import { Checkbox } from '@chakra-ui/react';
import { Field } from 'react-final-form';

import { handlerProps } from '../handlers';
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
        checked={input.checked}
        isDisabled={isDisabled}
        isInvalid={meta.invalid}
        isChecked={input.checked}
        defaultChecked={defaultChecked}
        {...handlerProps(input, props)}
      >
        {label}
      </Checkbox>
    )}
  />
);
