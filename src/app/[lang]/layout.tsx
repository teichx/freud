import { PropsWithChildren } from 'react';

import type { Metadata, Viewport } from 'next';

import { NextAuthProvider } from '~/common/nextAuth';
import { ReduxProvider } from '~/common/reducer';
import { CustomChakraProvider } from '~/common/themes';
import { SoftRefreshWrapper } from '~/core/services/SoftRefresh';
import { languagesKey } from '~/i18n/languages';
import { ProviderI18n } from '~/i18n/ProviderI18n';
import { LocaleKeys } from '~/i18n/types';

type RootLayoutProps = PropsWithChildren<{
  params: {
    lang: LocaleKeys;
  };
}>;

const RootLayout = ({ children, params: { lang } }: RootLayoutProps) => (
  <html lang={lang}>
    <body>
      <ReduxProvider>
        <ProviderI18n params={{ locale: lang }}>
          <CustomChakraProvider>
            <NextAuthProvider>
              <SoftRefreshWrapper>{children}</SoftRefreshWrapper>
            </NextAuthProvider>
          </CustomChakraProvider>
        </ProviderI18n>
      </ReduxProvider>
    </body>
  </html>
);

export function generateViewport(): Viewport {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  };
}

export const metadata: Metadata = {
  title: 'Freud',
  icons: {
    apple: '/static/favicon/apple-touch-icon.png',
    icon: '/static/favicon/favicon-32x32.png',
  },
};

export const generateStaticParams = async () =>
  languagesKey.map((lang) => ({ lang }));

export default RootLayout;
