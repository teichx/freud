import { Container as EmailContainer } from '@react-email/components';

import { emailTheme } from './emailTheme';
import { EmailComponentProps } from './types';

export const Container = ({
  children,
  style,
  ...props
}: EmailComponentProps) => (
  <EmailContainer
    {...props}
    style={{
      margin: '0 auto',
      backgroundColor: emailTheme.colors.white,
      ...style,
    }}
  >
    {children}
  </EmailContainer>
);
