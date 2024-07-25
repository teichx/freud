import { FC } from 'react';

import { Box, Checkbox } from '@chakra-ui/react';
import { Field } from 'react-final-form';

import { SkeletonContextLoader } from '../../SkeletonContextLoader';
import { handlerProps } from '../handlers';
import { FormCheckboxProps } from './types';

export const FormCheckbox: FC<FormCheckboxProps> = ({
  name,
  label,
  value,
  isDisabled,
  defaultChecked,
  ...props
}) => (
  <Field<boolean | string | number>
    name={name}
    type='checkbox'
    value={value}
    defaultValue={defaultChecked}
    render={({ input, meta }) => (
      <Box my='2px' display='inline-block'>
        <SkeletonContextLoader>
          <Checkbox
            {...props}
            m='0'
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
        </SkeletonContextLoader>
      </Box>
    )}
  />
);
