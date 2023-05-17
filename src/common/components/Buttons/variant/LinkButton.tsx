import { FC } from 'react';

import { Button } from '@chakra-ui/react';
import Link from 'next/link';

import { LinkButtonProps } from '../types';

export const LinkButton: FC<LinkButtonProps> = ({
  text,
  children,
  href,
  linkProps,
  ...props
}) => (
  <Link {...(linkProps || {})} href={href}>
    <Button {...props}>{text || children}</Button>
  </Link>
);
