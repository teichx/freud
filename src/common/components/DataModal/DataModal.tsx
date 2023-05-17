import { PropsWithChildren } from 'react';

import {
  Box,
  Divider,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

import { CancelButton } from '../Buttons';
import { DataModalProps } from './types';

export function DataModal<TWrapperProps extends PropsWithChildren>({
  title,
  children,
  modalProps,
  buttonTrigger,
  footerComponents,
  wrapper: Wrapper,
  hideCancelButton,
  wrapperProps,
}: PropsWithChildren<DataModalProps<TWrapperProps>>) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <HStack justifyContent='flex-start'>
        <Box onClick={onOpen}>{buttonTrigger}</Box>
      </HStack>

      <Modal {...modalProps} size='4xl' isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backdropFilter='blur(6px)' />

        <Wrapper {...{ children: undefined, ...wrapperProps }}>
          <ModalContent>
            <ModalCloseButton mt={2} zIndex='popover' />

            {title ? (
              <ModalHeader>{title}</ModalHeader>
            ) : (
              <Box pt='14' mt='1.5' />
            )}

            {children && (
              <Box>
                <Divider mb='2' />

                <ModalBody>{children}</ModalBody>
              </Box>
            )}

            {(!hideCancelButton || !!footerComponents) && <Divider />}

            <ModalFooter>
              {!hideCancelButton && <CancelButton onClick={onClose} mr='4' />}

              {footerComponents}
            </ModalFooter>
          </ModalContent>
        </Wrapper>
      </Modal>
    </Box>
  );
}
