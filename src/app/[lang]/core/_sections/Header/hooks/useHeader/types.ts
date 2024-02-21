export type HeaderItemProps = {
  path: string;
  label: string;
  isSelected: boolean;
};

export type UseHeaderProps = () => {
  headersItems: HeaderItemProps[];
};
