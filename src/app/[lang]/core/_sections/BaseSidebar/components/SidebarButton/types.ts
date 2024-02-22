import { ReactNode } from 'react';

import { ButtonProps } from '@chakra-ui/react';

export type SidebarButtonProps = Omit<ButtonProps, 'children'> & {
  label: ReactNode;
};
