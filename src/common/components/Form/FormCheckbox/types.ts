import { CheckboxProps } from '@chakra-ui/react';

export type FormCheckboxProps = {
  name: string;
  label?: string | null;
} & Pick<CheckboxProps, 'size' | 'value' | 'isDisabled' | 'defaultChecked'>;
