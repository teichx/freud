import { ReactNode } from 'react';

import { TableColumnHeaderProps } from '@chakra-ui/react';

export type TDataId = {
  id: string | number;
};

export type DataTableColumnProps<TData extends TDataId> = Omit<
  TableColumnHeaderProps,
  'children'
> & {
  label: string;
  accessor: keyof TData | null;
  render?: (props: {
    data: TData;
    column: DataTableColumnProps<TData>;
  }) => ReactNode;
};

export type DataTableProps<
  TData extends TDataId = TDataId & Record<string, string>
> = {
  columns: DataTableColumnProps<TData>[];
  data: TData[];
  totalItems?: number;
  isLoading?: boolean;
  translateHeader?: boolean;
  limitOptions?: number[];
};

export type DataTableStateProps = {
  totalItems: number;
  isLoading: boolean;
};

export type PageSizeOptionsToSelectProps = Required<
  Pick<DataTableProps, 'limitOptions'>
>;
