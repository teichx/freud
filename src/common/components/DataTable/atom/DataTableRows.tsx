import { Tr, Td } from '@chakra-ui/react';

import { TDataId } from '../types';
import { DataTableRowsProps } from './types';

export function DataTableRows<
  TData extends TDataId = TDataId & Record<string, string>
>({ isLoading, data, columns }: DataTableRowsProps<TData>) {
  return isLoading ? null : (
    <>
      {data.map((x) => (
        <Tr key={x.id}>
          {columns.map((column) => {
            const { accessor, render, label, ...columnProps } = column;
            const element = accessor ? x[accessor] : null;
            const elementDefined =
              typeof element === 'undefined' ? '' : element;

            const value = render
              ? render({ data: x, column })
              : `${elementDefined}`;

            return (
              <Td {...columnProps} key={label}>
                {value}
              </Td>
            );
          })}
        </Tr>
      ))}
    </>
  );
}
