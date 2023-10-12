import { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { DataTable, DataTableColumnProps } from '~/common/components/DataTable';
import { useDefaultQuery } from '~/common/query';
import {
  ListPatientResume,
  ListPatientSuccess,
} from '~/core/api/patient/types';
import { ApiRoutes } from '~/core/constants';
import { listPatientsSchema } from '~/core/contract/patient/listPatientsSchema';
import { useFormat } from '~/core/hooks';
import { useAuth } from '~/core/services';

import { PatientActions } from './PatientActions';
import { PatientArchived } from './PatientArchived';
import { PatientTableStateProps } from './types';

const INITIAL_STATE: PatientTableStateProps = {
  isLoading: false,
  data: [],
  totalItems: 0,
};

export const PatientsTable = () => {
  const { format } = useFormat();
  const { t } = useTranslation(undefined, {
    keyPrefix: 'pages.patient.list',
  });
  const [{ isLoading, totalItems, data }, setState] = useState(INITIAL_STATE);
  const { stringParameters, getStateByString } = useDefaultQuery();
  const { authenticateFetch } = useAuth();

  useEffect(() => {
    setState((x) => ({ ...x, isLoading: true }));
    const state = getStateByString(stringParameters);
    if (!listPatientsSchema.isValidSync(state)) return;

    authenticateFetch(format(ApiRoutes.Patient.List, stringParameters))
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
  }, [authenticateFetch, format, stringParameters, getStateByString]);

  const COLUMNS: DataTableColumnProps<ListPatientResume>[] = [
    {
      w: '306px',
      accessor: 'id',
      label: t('header.id'),
    },
    {
      accessor: 'name',
      label: t('header.name'),
      render: ({ data: { archivedAt, name } }) => (
        <PatientArchived text={name} isArchived={!!archivedAt} />
      ),
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
        <PatientActions
          patientId={data.id}
          patientName={data.name}
          isArchived={!!data.archivedAt}
        />
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
