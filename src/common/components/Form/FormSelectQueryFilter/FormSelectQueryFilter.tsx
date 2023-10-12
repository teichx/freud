import { useQueryFilter } from '~/common/query';

import { FormSelect } from '../FormSelect';
import { FormSelectQueryFilterProps } from './types';

export function FormSelectQueryFilter<IsMulti extends boolean = false>({
  name,
  options,
  ...props
}: FormSelectQueryFilterProps<IsMulti>) {
  const { combineFilters } = useQueryFilter();

  return (
    <FormSelect
      {...props}
      name={name}
      options={options}
      selectOptions={{
        ...props.selectOptions,
        onChange: (selectedItems) => {
          if (!Array.isArray(selectedItems)) return;

          const values = selectedItems.map((x) => x.value);
          combineFilters(name, values);
        },
      }}
    />
  );
}
