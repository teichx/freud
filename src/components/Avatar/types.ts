import { AvatarProps as ChakraUiAvatarProps } from '@chakra-ui/react';

export type AvatarProps = Omit<ChakraUiAvatarProps, 'width' | 'height'> & {
  src: string;
  alt: string;
  w: number;
  h: number;
};
