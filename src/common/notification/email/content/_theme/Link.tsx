import { Link as EmailLink } from '@react-email/components';

import { emailTheme } from './emailTheme';
import { EmailComponentProps } from './types';

export const Link = ({
  children,
  style,
  ...props
}: EmailComponentProps & { href: string }) => (
  <EmailLink
    {...props}
    style={{
      color: emailTheme.colors.book.desertSun[500],
      ...style,
    }}
  >
    {children}
  </EmailLink>
);
