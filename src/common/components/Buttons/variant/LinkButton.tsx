import { forwardRef, Button } from '@chakra-ui/react';
import Link from 'next/link';

import { LinkButtonProps } from '../types';

export const LinkButton = forwardRef<LinkButtonProps, 'button'>(
  ({ text, children, href, linkProps, ...props }, ref) => (
    <Link {...(linkProps || {})} href={href}>
      <Button {...props} ref={ref}>
        {text || children}
      </Button>
    </Link>
  )
);
