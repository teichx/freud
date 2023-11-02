import { forwardRef } from 'react';

import { Avatar as ChakraUiAvatar } from '@chakra-ui/react';
import Image from 'next/image';

import { AvatarProps } from './types';

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  function AvatarFunction({ name, src, w, h, ...props }, ref) {
    return (
      <ChakraUiAvatar
        sx={{
          borderRadius: '50%',
          img: {
            top: 0,
            left: 0,
            position: 'absolute',
            borderRadius: '50%',
          },
          ...props.sx,
        }}
        {...props}
        ref={ref}
        name={name}
        w={w ? `${w}px` : undefined}
        minW={w ? `${w}px` : undefined}
        h={h ? `${h}px` : undefined}
        minH={h ? `${h}px` : undefined}
      >
        {src && <Image src={src} alt={src} width={w} height={h} />}
      </ChakraUiAvatar>
    );
  }
);
