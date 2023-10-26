import { FC } from 'react';

import { Tr, Td } from '@chakra-ui/react';

import { useScopedI18n } from '~/i18n/client';

import { DataTableNoDataProps } from './types';

export const DataTableNoData: FC<DataTableNoDataProps> = ({
  isVisible,
  columnsLength,
}) => {
  const t = useScopedI18n('common.dataTable');

  return isVisible ? (
    <Tr>
      <Td textAlign='center' colSpan={columnsLength}>
        {t('noData')}
      </Td>
    </Tr>
  ) : null;
};
