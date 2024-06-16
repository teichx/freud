import { IconType } from 'react-icons/lib';

export type BaseSidebarItemProps = {
  label: string;
  href: string;
  isActive?: boolean;
  isDisabled?: boolean;
  Icon: IconType;
};

export type SidebarItemProps = BaseSidebarItemProps & {
  items?: Omit<BaseSidebarItemProps, 'Icon'>[];
};

export type UseSidebar = () => {
  items: SidebarItemProps[];
};
