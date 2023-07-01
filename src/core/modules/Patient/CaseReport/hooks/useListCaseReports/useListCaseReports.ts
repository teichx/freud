import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { useQueryPagination } from '~/common/hooks';
import { ListCaseReportSuccess } from '~/core/api/patient/caseReport/types';
import { ApiRoutes } from '~/core/constants';
import { useFormat } from '~/core/hooks';
import { useAuth, useLoader } from '~/core/services';

import { UseListCaseReports, UseListCaseReportsState } from './types';

const INITIAL_STATE: UseListCaseReportsState = {
  patientName: '',
  caseReports: [],
  totalItems: 0,
};

export const useListCaseReports: UseListCaseReports = () => {
  const { query } = useRouter();
  const { setIsLoading } = useLoader('DEFAULT');
  const { formatRoute } = useFormat();
  const { authenticateFetch } = useAuth();
  const { page, limit } = useQueryPagination();
  const [state, setState] = useState(INITIAL_STATE);

  const id = String(query.patientId || '');

  useEffect(() => {
    if (!id) return;

    setIsLoading(true);
    authenticateFetch(
      formatRoute(ApiRoutes.Patient.CaseReport.Google.List, id, page, limit)
    )
      .then<ListCaseReportSuccess>((x) => x.json())
      .then((result) => {
        setState((x) => ({
          ...x,
          patientName: result.patientName,
          caseReports: result.caseReports,
          totalItems: result.totalItems,
        }));
      })
      .catch(() => setState(INITIAL_STATE))
      .finally(() => setIsLoading(false));
  }, [id, page, limit, authenticateFetch, formatRoute, setIsLoading]);

  return {
    ...state,
    patientId: id,
  };
};
