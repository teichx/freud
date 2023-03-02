import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import common from '~/core/locales/common.json';
import ptBR from '~/core/locales/pt-BR/translations.json';

i18n.use(initReactI18next).init({
  resources: {
    'pt-BR': {
      ...ptBR,
      ...common,
    },
  },
  lng: 'pt-BR',
  fallbackLng: 'pt-BR',
  ns: ['translations', 'common'],
  defaultNS: 'translations',
  saveMissing: true,
  saveMissingTo: 'all',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
