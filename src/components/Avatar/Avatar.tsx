import { forwardRef } from 'react';

import Image from 'next/image';

import { ChakraUiAvatar } from './style';
import { AvatarProps } from './types';

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  function AvatarFunction({ name, src, w, h, ...props }, ref) {
    return (
      <ChakraUiAvatar
        {...props}
        ref={ref}
        name={name}
        w={w ? `${w}px` : undefined}
        minW={w ? `${w}px` : undefined}
        h={h ? `${h}px` : undefined}
        minH={h ? `${h}px` : undefined}
      >
        <Image src={src} alt={src} width={w} height={h} />
      </ChakraUiAvatar>
    );
  }
);
