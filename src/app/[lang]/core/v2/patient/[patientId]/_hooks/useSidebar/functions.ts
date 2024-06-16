import { SidebarItemProps } from './types';

export const mapIsActive = (pathname: string, items: SidebarItemProps[]) =>
  items.map((item) => ({
    ...item,
    isActive: pathname.endsWith(item.href),
    items: item.items?.map((subItem) => ({
      ...subItem,
      isActive: pathname.endsWith(subItem.href),
    })),
  }));
