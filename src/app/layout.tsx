import { PropsWithChildren } from 'react';

import { Metadata } from 'next/types';

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

export const metadata: Metadata = {
  title: 'Freud',
  manifest: '/static/favicon/site.webmanifest',
  icons: {
    apple: '/static/favicon/apple-touch-icon.png',
    icon: '/static/favicon/favicon-32x32.png',
  },
};

export default RootLayout;
