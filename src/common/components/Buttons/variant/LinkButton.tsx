import { Button } from '@chakra-ui/react';
import Link from 'next/link';

import { LinkButtonProps } from '../types';

export const LinkButton = ({
  text,
  children,
  href,
  linkProps,
  ...props
}: LinkButtonProps) => (
  <Link {...(linkProps || {})} href={href}>
    <Button {...props}>{text || children}</Button>
  </Link>
);
