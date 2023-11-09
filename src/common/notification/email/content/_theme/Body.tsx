import { Body as EmailBody } from '@react-email/components';

import { emailTheme } from './emailTheme';
import { EmailComponentProps } from './types';

export const Body = ({ children, style, ...props }: EmailComponentProps) => (
  <EmailBody
    {...props}
    style={{
      textAlign: 'left',
      lineHeight: '1.5',
      fontSize: emailTheme.fontSizes.md,
      color: emailTheme.colors.blackAlpha[900],
      backgroundColor: emailTheme.colors.gray[200],
      fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
      ...style,
    }}
  >
    {children}
  </EmailBody>
);
