import { FC } from 'react';

import { Button } from '@chakra-ui/react';
import Link from 'next/link';

import { LinkButtonProps } from '../types';

export const LinkButton: FC<LinkButtonProps> = ({ text, ...props }) => (
  <Button as={Link} {...props}>
    {text}
  </Button>
);
