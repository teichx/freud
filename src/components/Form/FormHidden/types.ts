import { InputProps } from '@chakra-ui/react';

export type FormHiddenProps = {
  name: string;
} & Pick<InputProps, 'defaultValue'>;
