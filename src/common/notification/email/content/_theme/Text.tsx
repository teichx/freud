import { Text as EmailText } from '@react-email/components';

import { EmailComponentProps } from './types';

export const Text = ({ children, style, ...props }: EmailComponentProps) => (
  <EmailText
    {...props}
    style={{
      fontSize: 'inherit',
      ...style,
    }}
  >
    {children}
  </EmailText>
);
