import { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { DataTable, DataTableColumnProps } from '~/common/components/DataTable';
import { useQueryPagination } from '~/common/hooks';
import {
  ListPatientResume,
  ListPatientSuccess,
} from '~/core/api/patient/types';
import { ApiRoutes } from '~/core/constants';
import { useFormat } from '~/core/hooks';
import { useAuth } from '~/core/services';

import { PatientActions } from './PatientActions';
import { PatientTableStateProps } from './types';

const INITIAL_STATE: PatientTableStateProps = {
  isLoading: false,
  data: [],
  totalItems: 0,
};

export const PatientsTable = () => {
  const { formatRoute } = useFormat();
  const { t } = useTranslation(undefined, {
    keyPrefix: 'pages.patient.list',
  });
  const [{ isLoading, totalItems, data }, setState] = useState(INITIAL_STATE);
  const { page, limit: pageSize } = useQueryPagination();
  const { authenticateFetch } = useAuth();

  useEffect(() => {
    const url = new URLSearchParams();
    url.set('page', page.toString());
    url.set('pageSize', pageSize.toString());

    setState((x) => ({ ...x, isLoading: true }));
    authenticateFetch(
      formatRoute(
        ApiRoutes.Patient.Google.List,
        page.toString(),
        pageSize.toString()
      )
    )
      .then<ListPatientSuccess>((x) => x.json())
      .then((result) => {
        setState((x) => ({
          ...x,
          data: result.patients,
          isLoading: false,
          totalItems: result.totalItems,
        }));
      })
      .catch(() => setState(INITIAL_STATE));
  }, [page, pageSize, authenticateFetch, formatRoute]);

  const COLUMNS: DataTableColumnProps<ListPatientResume>[] = [
    {
      w: '306px',
      accessor: 'id',
      label: t('header.id'),
    },
    {
      accessor: 'name',
      label: t('header.name'),
    },
    {
      w: '210px',
      textAlign: 'center',
      accessor: 'caseReportCount',
      label: t('header.caseReportCount'),
      render: ({ data: { caseReportCount } }) =>
        t('cell.caseReportCount', { count: caseReportCount }),
    },
    {
      w: '210px',
      textAlign: 'center',
      accessor: 'lastCaseReport',
      label: t('header.lastCaseReport'),
      render: ({ data: { lastCaseReport } }) => lastCaseReport || '-',
    },
    {
      w: '90px',
      textAlign: 'center',
      accessor: null,
      label: t('header.actions'),
      render: ({ data }) => (
        <PatientActions patientId={data.id} patientName={data.name} />
      ),
    },
  ];

  return (
    <DataTable
      data={data}
      columns={COLUMNS}
      isLoading={isLoading}
      totalItems={totalItems}
      skeletonHeight='38px'
    />
  );
};
