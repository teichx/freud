import { Thead } from '@chakra-ui/react';

import { TDataId } from '../types';
import { StyledTheadTh, StyledTheadTr } from './styles';
import { DataTableHeaderProps } from './types';

export function DataTableHeader<
  TData extends TDataId = TDataId & Record<string, string>
>({ columns, size }: DataTableHeaderProps<TData>) {
  return (
    <Thead>
      <StyledTheadTr>
        {columns
          .map((x) =>
            Object.fromEntries(
              Object.entries(x).filter(([key]) => key !== 'render')
            )
          )
          .map(({ label, ...columnProps }) => (
            <StyledTheadTh
              {...columnProps}
              py={
                {
                  '': undefined,
                  sm: '1',
                  md: '3',
                  lg: '4',
                }[size || '']
              }
              key={label}
            >
              {label}
            </StyledTheadTh>
          ))}
      </StyledTheadTr>
    </Thead>
  );
}
