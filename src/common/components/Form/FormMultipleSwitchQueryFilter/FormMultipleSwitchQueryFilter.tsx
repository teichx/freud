import { Switch } from '@chakra-ui/react';
import { Field, useFormState } from 'react-final-form';

import { useQueryFilter } from '~/common/query';

import { FormMultipleSwitchQueryFilterProps } from './types';

export function FormMultipleSwitchQueryFilter({
  name,
  options,
}: FormMultipleSwitchQueryFilterProps) {
  const { values } = useFormState({ subscription: { values: true } });
  const { combineFilters } = useQueryFilter();

  return (
    <>
      {options.map(({ value, label }) => (
        <Field
          type='checkbox'
          multiple
          key={value}
          name={name}
          value={value}
          render={({ input }) => (
            <Switch
              {...input}
              size='sm'
              value={value}
              isChecked={input.checked}
              onChange={(e) => {
                input.onChange(e);

                const oldSelected: (string | number)[] = values[name] || [];
                combineFilters(
                  name,
                  e.target.checked
                    ? [...oldSelected, value].filter(Boolean)
                    : oldSelected.filter((x) => x !== value)
                );
              }}
            >
              {label}
            </Switch>
          )}
        />
      ))}
    </>
  );
}
