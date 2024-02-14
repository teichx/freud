import { PropsWithChildren } from 'react';

import {
  Box,
  Divider,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Heading,
} from '@chakra-ui/react';
import { FiX } from 'react-icons/fi';

import { Buttons, CancelButton } from '../Buttons';
import { DataModalProps } from './types';

export function DataModal<TWrapperProps extends PropsWithChildren>({
  title,
  children,
  modalProps,
  buttonTrigger,
  footerComponents,
  wrapper: Wrapper,
  hideCancelButton,
  disclosureProps,
  wrapperProps,
  buttonWrapperProps,
  headerContent,
}: PropsWithChildren<DataModalProps<TWrapperProps>>) {
  const { isOpen, onOpen, onClose } = useDisclosure(disclosureProps);
  const hasTitle = Boolean(title);

  return (
    <Box>
      <HStack
        justifyContent='flex-start'
        {...(buttonWrapperProps || {})}
        onClick={onOpen}
      >
        {buttonTrigger}
      </HStack>

      <Modal
        motionPreset='slideInBottom'
        {...modalProps}
        size='4xl'
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay backdropFilter='auto' backdropBlur='6px' />

        <Wrapper {...{ children: undefined, ...wrapperProps }}>
          <ModalContent>
            <ModalHeader>
              <Box
                display='flex'
                alignItems='center'
                justifyContent={hasTitle ? 'space-between' : 'flex-end'}
              >
                {hasTitle && (
                  <Heading variant='h3' size='md' fontWeight='semibold'>
                    {title}
                  </Heading>
                )}

                <Box
                  display='flex'
                  alignItems='center'
                  justifyContent='space-between'
                >
                  {headerContent}

                  <Buttons.IconButton
                    onClick={onClose}
                    icon={<FiX />}
                    aria-label='close button'
                  />
                </Box>
              </Box>
            </ModalHeader>

            {children && (
              <Box>
                <Divider mb='2' />

                <ModalBody position='relative'>{children}</ModalBody>
              </Box>
            )}

            {(!hideCancelButton || !!footerComponents) && <Divider />}

            {(!!footerComponents || !hideCancelButton) && (
              <ModalFooter>
                {!hideCancelButton && <CancelButton onClick={onClose} mr='4' />}

                {footerComponents}
              </ModalFooter>
            )}
          </ModalContent>
        </Wrapper>
      </Modal>
    </Box>
  );
}
