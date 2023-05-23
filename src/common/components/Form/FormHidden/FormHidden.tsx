import { FC } from 'react';

import { Input } from '@chakra-ui/react';
import { Field } from 'react-final-form';

import { handlerProps } from '../handlers';
import { FormHiddenProps } from './types';

export const FormHidden: FC<FormHiddenProps> = ({
  name,
  defaultValue,
  ...props
}) => (
  <Field
    type='hidden'
    name={name}
    defaultValue={defaultValue}
    render={({ input }) => (
      <Input
        type='hidden'
        {...props}
        {...input}
        {...handlerProps(input, props)}
      />
    )}
  />
);
