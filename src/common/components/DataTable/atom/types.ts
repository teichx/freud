import { SkeletonTextProps } from '@chakra-ui/react';

import { DataTableColumnProps, TDataId } from '../types';

export type DataTableFooterProps = {
  limitOptions: number[];
  totalItems?: number;
  columnsLength: number;
  size: 'sm' | 'md' | 'lg' | undefined;
};

export type DataTableNoDataProps = {
  columnsLength: number;
  isVisible: boolean;
};

export type DataTableLoaderProps = {
  isLoading: boolean;
  columnsLength: number;
  fixedHeight: boolean;
  skeletonHeight: SkeletonTextProps['skeletonHeight'];
};

export type DataTableHeaderProps<
  TData extends TDataId = TDataId & Record<string, string>
> = {
  columns: DataTableColumnProps<TData>[];
  size: 'sm' | 'md' | 'lg' | undefined;
};

export type DataTableRowsProps<
  TData extends TDataId = TDataId & Record<string, string>
> = {
  isLoading: boolean;
  data: TData[];
  columns: DataTableColumnProps<TData>[];
};
