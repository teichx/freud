import { Thead } from '@chakra-ui/react';

import { TDataId } from '../types';
import { StyledTheadTh, StyledTheadTr } from './styles';
import { DataTableHeaderProps } from './types';

export function DataTableHeader<
  TData extends TDataId = TDataId & Record<string, string>
>({ columns }: DataTableHeaderProps<TData>) {
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
            <StyledTheadTh {...columnProps} key={label}>
              {label}
            </StyledTheadTh>
          ))}
      </StyledTheadTr>
    </Thead>
  );
}
