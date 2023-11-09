import { Button as EmailButton } from '@react-email/components';

import { emailTheme } from './emailTheme';
import { EmailComponentProps } from './types';

export const Button = ({
  children,
  style,
  ...props
}: EmailComponentProps & { href: string }) => (
  <EmailButton
    {...props}
    style={{
      backgroundColor: emailTheme.colors.book.desertSun[500],
      borderRadius: emailTheme.radii['2xl'],
      color: emailTheme.colors.white,
      fontWeight: emailTheme.fontWeights.bold,
      padding: `${emailTheme.sizes[3]} 0`,
      textDecoration: 'none',
      textAlign: 'center',
      display: 'block',
      width: '100%',
      ...style,
    }}
  >
    {children}
  </EmailButton>
);
