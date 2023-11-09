import { EmailBase } from './_components';
import { Button, Text, emailTheme } from './_theme';
import { EmailLocale, getSynchronousScopedI18n } from './i18n';

const Welcome = ({ locale, name }: EmailLocale<{ name: string }>) => {
  const t = getSynchronousScopedI18n(locale, 'email.welcome');

  return (
    <EmailBase locale={locale}>
      <Text
        style={{
          fontSize: emailTheme.fontSizes['xl'],
        }}
      >
        {t('title')}
        {name && <span>{t('conditionalName', { name })}</span>}
      </Text>

      <Text>{t('text.0')}</Text>
      <Text>{t('text.1')}</Text>
      <Text>{t('text.2')}</Text>

      {process.env.NEXT_PUBLIC_VERCEL_URL && (
        <Button
          href={process.env.NEXT_PUBLIC_VERCEL_URL}
          style={{
            marginTop: emailTheme.space[4],
          }}
        >
          {t('clickHere')}
        </Button>
      )}
    </EmailBase>
  );
};

export default Welcome;
