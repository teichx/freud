import { LocaleKeys } from '~/i18n/types';

export {
  getSynchronousI18n,
  getSynchronousScopedI18n,
} from '../../../../../i18n/synchronous';

export type EmailLocale<T = unknown> = T & {
  locale: LocaleKeys;
};
