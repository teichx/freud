import { FC } from 'react';

import { StackProps } from '@chakra-ui/react';

export type InfiniteScrollStateProps<TItem extends { id: string }> =
  InfiniteScrollRequestProps<TItem>;

export type InfiniteScrollRequestProps<TItem extends { id: string }> = {
  items: TItem[];
  hasNextPage: boolean;
};

export type InfiniteScrollProps<TItem extends { id: string }> = {
  url: string;
  RenderItem: FC<TItem>;
  bottomDistance?: number;
  listProps?: StackProps;
};
