import { FC } from 'react';

import { Tr, Td } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { DataTableNoDataProps } from './types';

export const DataTableNoData: FC<DataTableNoDataProps> = ({
  isVisible,
  columnsLength,
}) => {
  const { t } = useTranslation();

  return isVisible ? (
    <Tr>
      <Td textAlign='center' colSpan={columnsLength}>
        {t('common:dataTable.noData')}
      </Td>
    </Tr>
  ) : null;
};
