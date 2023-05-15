import { ComponentProps } from 'react';

import { FormControlProps } from '@chakra-ui/react';
import { Select } from 'chakra-react-select';

export type FormSelectOptionProps = {
  value: string | number;
  label: string;
  isDisabled?: boolean;
};

export type FormSelectProps = Omit<FormControlProps, 'label'> & {
  name: string;
  helperText?: string;
  label?: string | null;
  unForceHelperText?: true;
  options: FormSelectOptionProps[];
  selectOptions?: ComponentProps<typeof Select<FormSelectOptionProps>>;
};

export type GetSelectOptionsProps = {
  value:
    | FormSelectOptionProps
    | number
    | string
    | (FormSelectOptionProps | number | string)[];
  options: FormSelectOptionProps[];
};
