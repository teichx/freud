import { Button } from '@chakra-ui/react';
import Link from 'next/link';

import { LinkButtonProps } from '../types';

export const LinkButton = ({
  text,
  children,
  href,
  ...props
}: LinkButtonProps) => (
  <Button as={Link} href={href} {...props}>
    {text || children}
  </Button>
);
