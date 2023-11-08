import { Text as EmailText } from '@react-email/components';

import { emailTheme } from './emailTheme';
import { EmailComponentProps } from './types';

export const Text = ({ children, style, ...props }: EmailComponentProps) => (
  <EmailText
    {...props}
    style={{
      fontSize: emailTheme.fontSizes.md,
      lineHeight: '1.5',
      textAlign: 'left',
      ...style,
    }}
  >
    {children}
  </EmailText>
);
