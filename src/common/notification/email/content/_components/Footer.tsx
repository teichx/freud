import { Section } from '@react-email/components';

import { Hr, Link, Text } from '../_theme';
import { emailTheme } from '../_theme/emailTheme';
import { Routes } from '../../../../../core/constants';
import { EmailLocale, getSynchronousScopedI18n } from '../i18n';

const withoutMargin = { margin: 0 };
const withoutMarginBold = {
  ...withoutMargin,
  fontWeight: emailTheme.fontWeights.bold,
};

const styleLink = {
  color: emailTheme.colors.blackAlpha[600],
  marginRight: emailTheme.sizes[3],
};

const url = process.env.NEXT_PUBLIC_VERCEL_URL || '';

export const Footer = ({ locale }: EmailLocale) => {
  const t = getSynchronousScopedI18n(locale, 'email.footer');

  return (
    <Section
      style={{
        margin: 0,
        paddingBottom: emailTheme.sizes[5],
        color: emailTheme.colors.blackAlpha[800],
      }}
    >
      <Hr />

      <Section
        style={{
          margin: 0,
          fontSize: emailTheme.fontSizes.sm,
          padding: `0 ${emailTheme.sizes[10]}`,
        }}
      >
        <Text style={withoutMargin}>{t('sincerely')}</Text>
        <Text style={withoutMargin}>
          {t('yourSpace', {
            link: (
              <Link style={withoutMarginBold} href={url}>
                {url}
              </Link>
            ),
          })}
        </Text>

        <Text style={{ textAlign: 'center', marginBottom: 0 }}>
          <Link
            href={`${url}${Routes.Core.Profile.Unsubscribe}`}
            style={styleLink}
          >
            {t('unsubscribe')}
          </Link>{' '}
          <Link
            href={`${url}${Routes.Core.Profile.Notifications}`}
            style={styleLink}
          >
            {t('notificationSettings')}
          </Link>
        </Text>
      </Section>
    </Section>
  );
};
