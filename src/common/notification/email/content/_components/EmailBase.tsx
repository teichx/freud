import { PropsWithChildren } from 'react';

import { Head, Html, Section } from '@react-email/components';

import { Body, Container, emailTheme } from '../_theme';
import { EmailLocale } from '../i18n';
import { Footer } from './Footer';
import { Header } from './Header';

export const EmailBase = ({
  children,
  locale,
}: PropsWithChildren<EmailLocale>) => (
  <Html>
    <Head />

    <Body>
      <Container>
        <Header />

        <Section
          style={{
            paddingTop: emailTheme.sizes[8],
            paddingBottom: emailTheme.sizes[3],
            paddingLeft: emailTheme.sizes[10],
            paddingRight: emailTheme.sizes[10],
          }}
        >
          {children}
        </Section>

        <Footer locale={locale} />
      </Container>
    </Body>
  </Html>
);
