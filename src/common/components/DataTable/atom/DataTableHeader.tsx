import { Thead } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { TDataId } from '../types';
import { StyledTheadTh, StyledTheadTr } from './styles';
import { DataTableHeaderProps } from './types';

export function DataTableHeader<
  TData extends TDataId = TDataId & Record<string, string>
>({ columns }: DataTableHeaderProps<TData>) {
  const { t } = useTranslation();

  return (
    <Thead>
      <StyledTheadTr>
        {columns
          .map((x) =>
            Object.fromEntries(
              Object.entries(x).filter(([key]) => key !== 'render')
            )
          )
          .map(({ label, tLabel, ...columnProps }) => (
            <StyledTheadTh {...columnProps} key={label}>
              {label ? label : t(tLabel)}
            </StyledTheadTh>
          ))}
      </StyledTheadTr>
    </Thead>
  );
}
