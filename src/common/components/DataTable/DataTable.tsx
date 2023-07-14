import { Table, Tbody } from '@chakra-ui/react';

import {
  DataTableHeader,
  DataTableFooter,
  DataTableLoader,
  DataTableNoData,
  DataTableRows,
} from './atom';
import { StyledTableContainer } from './atom/styles';
import { DataTableProps, TDataId } from './types';

export function DataTable<
  TData extends TDataId = TDataId & Record<string, string>
>({
  data,
  columns,
  isLoading,
  fixedHeight,
  totalItems = 0,
  skeletonHeight = 8,
  limitOptions = [10, 25, 50, 100],
}: DataTableProps<TData>) {
  return (
    <StyledTableContainer>
      <Table variant='simple' colorScheme='book.desertSun'>
        <DataTableHeader<TData> columns={columns} />

        <Tbody>
          <DataTableNoData
            columnsLength={columns.length}
            isVisible={!data.length && !isLoading}
          />

          <DataTableLoader
            isLoading={!!isLoading}
            dataLength={data?.length}
            columnsLength={columns.length}
            fixedHeight={!!fixedHeight}
            skeletonHeight={skeletonHeight}
          />

          <DataTableRows<TData>
            isLoading={!!isLoading}
            columns={columns}
            data={data}
          />
        </Tbody>

        <DataTableFooter
          columnsLength={columns.length}
          totalItems={totalItems}
          limitOptions={limitOptions}
        />
      </Table>
    </StyledTableContainer>
  );
}
