import { Hr as EmailHr } from '@react-email/components';

import { emailTheme } from './emailTheme';
import { EmailComponentProps } from './types';

export const Hr = ({ children, style, ...props }: EmailComponentProps) => (
  <EmailHr
    {...props}
    style={{
      borderColor: emailTheme.colors.blackAlpha[400],
      margin: `${emailTheme.sizes[6]} 0`,
      ...style,
    }}
  >
    {children}
  </EmailHr>
);
