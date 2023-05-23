import { ComponentProps } from 'react';

import { FormControlProps } from '@chakra-ui/react';
import { Select } from 'chakra-react-select';
import { UseFieldConfig } from 'react-final-form';

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
  isMulti?: IsMulti;
  defaultValue?: IsMulti extends true
    ? FormSelectOptionOrValue
    : FormSelectOptionOrValue[];
  selectOptions?: ComponentProps<typeof Select<FormSelectOptionProps, IsMulti>>;
};

export type GetSelectOptionsProps = {
  value?:
    | FormSelectOptionProps
    | number
    | string
    | (FormSelectOptionProps | number | string)[];
  options: FormSelectOptionProps[];
  isMulti?: boolean;
};

export type FieldConfig = UseFieldConfig<
  FormSelectOptionOrValue | FormSelectOptionOrValue[],
  FormSelectOptionProps[]
>;

export type ParseFnProps = NonNullable<FieldConfig['parse']>;

export type FormatFnProps = NonNullable<FieldConfig['format']>;
