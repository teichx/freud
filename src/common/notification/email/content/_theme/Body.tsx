import { Body as EmailBody } from '@react-email/components';

import { emailTheme } from './emailTheme';
import { EmailComponentProps } from './types';

export const Body = ({ children, style, ...props }: EmailComponentProps) => (
  <EmailBody
    {...props}
    style={{
      backgroundColor: emailTheme.colors.gray[200],
      color: emailTheme.colors.blackAlpha[900],
      fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
      ...style,
    }}
  >
    {children}
  </EmailBody>
);
