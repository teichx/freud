import { FC } from 'react';

import { EditIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';

import { DataTable, DataTableColumnProps } from '~/common/components/DataTable';
import { useLoader } from '~/core/services';
import { useScopedI18n } from '~/i18n/client';

import { ListCaseReportResume } from '../../../../api/list/types';
import { PatientCaseReportUpsertModal } from '../../../../modal/upsert';
import { PatientCaseReportTableProps } from './types';

export const PatientCaseReportTable: FC<PatientCaseReportTableProps> = ({
  patientId,
  totalItems,
  patientName,
  caseReports,
}) => {
  const t = useScopedI18n('translations.pages.patient.caseReport');
  const { isLoading } = useLoader('DEFAULT');

  const COLUMNS: DataTableColumnProps<ListCaseReportResume>[] = [
    {
      w: '310px',
      maxW: '310px',
      accessor: 'id',
      label: t('table.id'),
    },
    {
      maxW: '210px',
      accessor: 'resume',
      label: t('list.resume'),
      overflowX: 'clip',
      textOverflow: 'ellipsis',
    },
    {
      w: '155px',
      maxW: '155px',
      textAlign: 'center',
      accessor: 'reportingDate',
      label: t('reportingDate'),
    },
    {
      w: '150px',
      maxW: '150px',
      minW: '150px',
      textAlign: 'center',
      accessor: null,
      label: t('table.actions'),
      render: ({ data: caseReport }) => (
        <PatientCaseReportUpsertModal
          caseReportId={caseReport.id}
          patient={{ id: patientId, name: patientName }}
        >
          <Button size='sm' leftIcon={<EditIcon />}>
            {t('table.update')}
          </Button>
        </PatientCaseReportUpsertModal>
      ),
    },
  ];

  return (
    <DataTable
      size='sm'
      headSize='md'
      fixedHeight
      data={caseReports}
      columns={COLUMNS}
      isLoading={isLoading}
      skeletonHeight={32}
      totalItems={totalItems}
    />
  );
};
