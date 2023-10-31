import { Box } from '@chakra-ui/react';
import Image from 'next/image';

import { ProjectSectionImageProps } from './types';

export const ProjectSectionImage = ({
  src,
  alt,
  sx,
}: ProjectSectionImageProps) => (
  <Box
    sx={{
      w: {
        base: '100%',
        md: '50%',
        lg: '100%',
      },
      mx: 'auto',
      mt: {
        base: '5',
        lg: 0,
      },
      ...sx,
    }}
  >
    <Box
      sx={{
        h: '0',
        w: '100%',
        pb: '100%',
        overflow: 'hidden',
        borderRadius: 'md',
        position: 'relative',
      }}
    >
      <Image
        fill
        alt={alt}
        src={src}
        priority
        quality={75}
        style={{
          objectFit: 'cover',
        }}
        sizes='(max-width: 1300px) 600px, (max-width: 1024px) 500px, 100vw'
      />
    </Box>
  </Box>
);
