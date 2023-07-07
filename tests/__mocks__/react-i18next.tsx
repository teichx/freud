import { useTranslation as useTranslationReal } from 'react-i18next';

type TranslationType = typeof useTranslationReal<'translation'>;

type Translation = (
  ...props: Parameters<TranslationType>
) => Pick<ReturnType<TranslationType>, 't'>;

export const useTranslation: Translation = (ns, options) => ({
  t: jest
    .fn()
    .mockImplementation(
      (key) => `${options?.keyPrefix ? options?.keyPrefix + '.' : ''}${key}`
    ),
});
