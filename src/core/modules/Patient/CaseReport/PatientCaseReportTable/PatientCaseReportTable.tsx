import { FC } from 'react';

import { EditIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { DataTable, DataTableColumnProps } from '~/common/components/DataTable';
import { ListCaseReportResume } from '~/core/api/patient/caseReport/types';
import { useLoader } from '~/core/services';

import { PatientCaseReport } from '../PatientCaseReport';
import { PatientCaseReportTableProps } from './types';

export const PatientCaseReportTable: FC<PatientCaseReportTableProps> = ({
  patientId,
  totalItems,
  patientName,
  caseReports,
}) => {
  const { t: tWords } = useTranslation(undefined, {
    keyPrefix: 'words',
  });
  const { t } = useTranslation(undefined, {
    keyPrefix: 'pages.patient.caseReport',
  });
  const { isLoading } = useLoader('DEFAULT');

  const COLUMNS: DataTableColumnProps<ListCaseReportResume>[] = [
    {
      w: '306px',
      accessor: 'id',
      label: tWords('id'),
    },
    {
      w: '210px',
      maxW: '210px',
      accessor: 'resume',
      label: t('list.resume'),
      overflowX: 'clip',
      textOverflow: 'ellipsis',
    },
    {
      w: '210px',
      textAlign: 'center',
      accessor: 'reportingDate',
      label: t('reportingDate'),
    },
    {
      w: '150px',
      textAlign: 'center',
      accessor: null,
      label: tWords('actions'),
      render: ({ data: caseReport }) => (
        <PatientCaseReport
          caseReportId={caseReport.id}
          patient={{ id: patientId, name: patientName }}
        >
          <Button size='sm' leftIcon={<EditIcon />}>
            {tWords('update')}
          </Button>
        </PatientCaseReport>
      ),
    },
  ];

  return (
    <DataTable
      fixedHeight
      data={caseReports}
      columns={COLUMNS}
      isLoading={isLoading}
      skeletonHeight='32px'
      totalItems={totalItems}
    />
  );
};
