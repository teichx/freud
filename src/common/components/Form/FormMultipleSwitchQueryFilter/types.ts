import { StackProps } from '@chakra-ui/react';

export type FormMultipleSwitchQueryFilterProps = {
  name: string;
  options: {
    value: string;
    label: string;
  }[];
  stackProps?: StackProps;
};
