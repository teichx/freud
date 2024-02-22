import { Box, SkeletonText, Table, Tbody, Td, Tr } from '@chakra-ui/react';

import { useQueryPaginate } from '~/common/query';

import {
  DataTableHeader,
  DataTableFooter,
  DataTableNoData,
  DataTableRows,
} from './atom';
import { StyledTableContainer } from './atom/styles';
import { DataTableProps, TDataId } from './types';

export function DataTable<
  TData extends TDataId = TDataId & Record<string, string>
>({
  data,
  size,
  columns,
  isLoading,
  fixedHeight,
  totalItems = 0,
  skeletonHeight = 8,
  limitOptions = [10, 25, 50, 100],
}: DataTableProps<TData>) {
  const { limit } = useQueryPaginate();

  return (
    <StyledTableContainer>
      <Table variant='simple' colorScheme='book.desertSun' size={size}>
        <DataTableHeader<TData> columns={columns} />

        <Tbody>
          <DataTableNoData
            columnsLength={columns.length}
            isVisible={!data.length && !isLoading}
          />

          {isLoading
            ? new Array(limit).fill(undefined).map((_, index) => (
                <Tr key={`loading-${index}`}>
                  <Td textAlign='center' colSpan={columns.length}>
                    <SkeletonText
                      noOfLines={1}
                      skeletonHeight={`${skeletonHeight}px`}
                    />
                  </Td>
                </Tr>
              ))
            : null}

          <DataTableRows<TData>
            isLoading={!!isLoading}
            columns={columns}
            data={data}
          />

          {fixedHeight && !isLoading
            ? new Array(Math.max(limit - data.length, 0))
                .fill(undefined)
                .map((_, index) => (
                  <Tr key={`loaded-empty-${index}`}>
                    <Td textAlign='center' colSpan={columns.length}>
                      <Box h={`${skeletonHeight}px`} />
                    </Td>
                  </Tr>
                ))
            : null}
        </Tbody>

        <DataTableFooter
          size={size}
          totalItems={totalItems}
          limitOptions={limitOptions}
          columnsLength={columns.length}
        />
      </Table>
    </StyledTableContainer>
  );
}
