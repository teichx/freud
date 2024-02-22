import { useEffect, useRef, useState } from 'react';

import { DataTable, DataTableColumnProps } from '~/common/components/DataTable';
import { useDefaultQuery } from '~/common/query';
import { ApiRoutes } from '~/core/constants';
import { useFormat } from '~/core/hooks';
import { createListPatientsSchema } from '~/core/modules/Patient/api/list/listPatientsSchema';
import { useAuth } from '~/core/services';
import { useScopedI18n } from '~/i18n/client';

import {
  ListPatientResume,
  ListPatientSuccess,
} from '../../../../api/list/types';
import { PatientActions } from '../PatientActions';
import { PatientName } from '../PatientName';
import { PatientTableStateProps } from './types';

const INITIAL_STATE: PatientTableStateProps = {
  isLoading: false,
  data: [],
  totalItems: 0,
};

export const PatientsTable = () => {
  const schema = useRef(createListPatientsSchema());
  const { format } = useFormat();
  const t = useScopedI18n('translations.pages.patient.list');
  const [{ isLoading, totalItems, data }, setState] = useState(INITIAL_STATE);
  const { stringParameters, getStateByString } = useDefaultQuery();
  const { authenticateFetch } = useAuth();

  useEffect(() => {
    setState((x) => ({ ...x, isLoading: true }));
    const state = getStateByString(stringParameters);
    if (!schema.current.isValidSync(state)) return;

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
        <PatientName text={name} isArchived={!!archivedAt} />
      ),
    },
    {
      w: '210px',
      textAlign: 'center',
      accessor: 'caseReportCount',
      label: t('header.caseReportCount'),
      render: ({ data: { caseReportCount } }) =>
        t('cell.caseReportCount', { count: caseReportCount || 0 }),
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
      size='sm'
      headSize='md'
      fixedHeight
      data={data}
      columns={COLUMNS}
      isLoading={isLoading}
      totalItems={totalItems}
      skeletonHeight={34}
    />
  );
};
