import { useState } from 'react';

import { GetCaseReportSuccess } from '~/core/api/patient/caseReport/types';
import { ApiRoutes } from '~/core/constants';
import { useFormat } from '~/core/hooks';
import { useAuth, useLoader } from '~/core/services';

import { UseGetCaseReport, UseGetCaseReportState } from './types';

const getDefaultState = (): UseGetCaseReportState => ({
  caseReport: {
    id: '',
    content: '',
    reportingDate: new Date().toISOString().split('T')[0],
  },
});

export const useGetCaseReport: UseGetCaseReport = ({ patientId }) => {
  const [{ caseReport }, setState] = useState(getDefaultState);
  const { formatRoute } = useFormat();
  const { authenticateFetch } = useAuth();
  const { startLoading, endLoading } = useLoader('GetPatientCaseReport');

  const getById: ReturnType<UseGetCaseReport>['getById'] = ({
    caseReportId,
  }) => {
    if (!caseReportId) {
      setState((x) => ({
        ...x,
        isLoaded: true,
      }));
      return;
    }

    startLoading();
    authenticateFetch(
      formatRoute(ApiRoutes.Patient.CaseReport.Get, patientId, caseReportId)
    )
      .then<GetCaseReportSuccess>((x) => x.json())
      .then((result) => {
        setState((x) => ({
          ...x,
          isLoaded: true,
          caseReport: result.caseReport,
        }));
      })
      .finally(endLoading);
  };

  const reset = () => setState(getDefaultState);

  return {
    caseReport,
    getById,
    reset,
  };
};
