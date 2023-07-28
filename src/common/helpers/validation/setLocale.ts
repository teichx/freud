import * as yup from 'yup';

import i18n from '~/common/locale/i18n';

const translate =
  <T extends Record<string, unknown>>(key: string): yup.Message<T> =>
  (message) =>
    i18n.t(`validation.${key}`, '', message);

yup.setLocale({
  mixed: {
    default: translate('mixed.invalid'),
    required: translate('mixed.required'),
    oneOf: translate('mixed.oneOf'),
    notOneOf: translate('mixed.notOneOf'),
    notNull: translate('mixed.notNull'),
    notType: translate('mixed.notType'),
    defined: translate('mixed.defined'),
  },
  string: {
    length: translate('string.length'),
    min: translate('string.min'),
    max: translate('string.max'),
    matches: translate('string.matches'),
    email: translate('string.email'),
    url: translate('string.url'),
    uuid: translate('string.uuid'),
    trim: translate('string.trim'),
    lowercase: translate('string.lowercase'),
    uppercase: translate('string.uppercase'),
  },
  number: {
    min: translate('number.min'),
    max: translate('number.max'),
    lessThan: translate('number.lessThan'),
    moreThan: translate('number.moreThan'),
    positive: translate('number.positive'),
    negative: translate('number.negative'),
    integer: translate('number.integer'),
  },
  date: {
    min: translate('date.min'),
    max: translate('date.max'),
  },
  boolean: {
    isValue: translate('boolean.isValue'),
  },
  object: {
    noUnknown: translate('object.noUnknown'),
  },
  array: {
    length: translate('array.length'),
    min: translate('array.min'),
    max: translate('array.max'),
  },
});
