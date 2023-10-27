import { FlattenLocaleKeys } from '~/i18n/types';

export type BreadcrumbItemProps = {
  href: string;
} & (
  | { text: string; textKey?: undefined }
  | { text?: undefined; textKey: FlattenLocaleKeys }
);

export type BreadcrumbProps = {
  items: BreadcrumbItemProps[];
};
