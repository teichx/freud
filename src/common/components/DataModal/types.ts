import { FC, PropsWithChildren, ReactNode } from 'react';

import { ModalProps } from '@chakra-ui/react';

export type DataModalProps<TWrapperProps extends PropsWithChildren> = {
  title?: ReactNode;
  buttonTrigger: ReactNode;
  footerComponents?: ReactNode;
  wrapper: FC<TWrapperProps>;
  wrapperProps: Omit<TWrapperProps, 'children'>;
  hideCancelButton?: boolean;
  modalProps?: Omit<ModalProps, 'isOpen' | 'onClose' | 'children'>;
};
