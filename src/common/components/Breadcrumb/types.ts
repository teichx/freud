export type BreadcrumbItemProps = {
  href: string;
} & (
  | { text: string; textKey?: undefined }
  | { text?: undefined; textKey: string }
);

export type BreadcrumbProps = {
  items: BreadcrumbItemProps[];
};
