import { ReactNode } from 'react';

import { ButtonProps } from '@chakra-ui/react';

export type VariantButtonProps = Omit<ButtonProps, 'children'> & {
  text?: ReactNode;
};
