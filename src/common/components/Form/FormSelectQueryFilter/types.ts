import { FormSelectProps } from '../FormSelect';

export type FormSelectQueryFilterProps<IsMulti extends boolean = false> =
  FormSelectProps<IsMulti> & {
    options: NonNullable<FormSelectProps['options']>;
  };
