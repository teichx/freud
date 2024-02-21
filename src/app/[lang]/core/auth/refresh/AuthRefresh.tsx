import { FC } from 'react';

import {
  Box,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from '@chakra-ui/react';
import Image from 'next/image';

import { SignIn, SignInAgain } from './sections';
import { AuthRefreshPageProps } from './types';

export const AuthRefresh: FC<AuthRefreshPageProps> = ({ isRefresh }) => {
  const SignInComponent = isRefresh ? SignInAgain : SignIn;
  const disclosure = useDisclosure({
    isOpen: true,
  });

  return (
    <Modal motionPreset='slideInBottom' size='5xl' isCentered {...disclosure}>
      <ModalOverlay backdropFilter='auto' backdropBlur='6px' />

      <ModalContent borderRadius='24px'>
        <ModalBody position='relative' p='0'>
          <Box w='100%' display='flex' alignItems='stretch'>
            <Box w='50%' position='relative'>
              <Box
                w='100%'
                h='130%'
                top='-15%'
                overflow='hidden'
                borderRadius='24px'
                position='absolute'
              >
                <Image
                  width={512}
                  height={460}
                  alt='Security image'
                  src='/static/core/auth/pexels-cottonbro-studio-5474286.jpg'
                  quality={75}
                  style={{
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    objectPosition: 'left center',
                  }}
                />
              </Box>
            </Box>

            <Box mx='auto' w='50%' pl='6' pr='6' py='10'>
              <SignInComponent />
            </Box>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
