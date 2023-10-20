import { PropsWithChildren } from 'react';

import { NextAuthProvider } from '~/common/nextAuth';
import { ReduxProvider } from '~/common/reducer';
import { CustomChakraProvider } from '~/common/themes';
import { SoftRefreshWrapper } from '~/core/services/SoftRefresh';

type RootLayoutProps = PropsWithChildren;

const RootLayout = ({ children }: RootLayoutProps) => (
  <html>
    <body>
      <ReduxProvider>
        <CustomChakraProvider>
          <NextAuthProvider>
            <SoftRefreshWrapper>{children}</SoftRefreshWrapper>
          </NextAuthProvider>
        </CustomChakraProvider>
      </ReduxProvider>
    </body>
  </html>
);

export default RootLayout;
