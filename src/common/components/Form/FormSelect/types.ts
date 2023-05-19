import { ComponentProps } from 'react';

import { FormControlProps } from '@chakra-ui/react';
import { Select } from 'chakra-react-select';

export type FormSelectOptionProps = {
  value: string | number;
  label: string;
  isDisabled?: boolean;
};

export type FormSelectOptionOrValue =
  | FormSelectOptionProps
  | FormSelectOptionProps['value'];

export type FormSelectProps<IsMulti extends boolean = false> = Omit<
  FormControlProps,
  'label' | 'defaultValue'
> & {
  name: string;
  helperText?: string;
  label?: string | null;
  unForceHelperText?: true;
  options: FormSelectOptionProps[];
  defaultValue?: FormSelectOptionOrValue | FormSelectOptionOrValue[];
  selectOptions?: ComponentProps<typeof Select<FormSelectOptionProps, IsMulti>>;
};

export type GetSelectOptionsProps = {
  value?:
    | FormSelectOptionProps
    | number
    | string
    | (FormSelectOptionProps | number | string)[];
  options: FormSelectOptionProps[];
};
