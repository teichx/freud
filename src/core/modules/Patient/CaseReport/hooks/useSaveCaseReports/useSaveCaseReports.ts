import { UpsertCaseReportSuccess } from '~/core/api/patient/caseReport/types';
import { ApiRoutes } from '~/core/constants';
import { useFormat } from '~/core/hooks';
import { useAuth, useLoader } from '~/core/services';

import { UseSaveCaseReports } from './types';

export const useSaveCaseReports: UseSaveCaseReports = ({
  patientId,
  successCallback,
  errorCallback,
}) => {
  const { formatRoute } = useFormat();
  const { startLoading, endLoading } = useLoader('SavePatientCaseReport');
  const { authenticateFetch } = useAuth();

  const saveCaseReport: ReturnType<UseSaveCaseReports>['saveCaseReport'] = (
    caseReport
  ) => {
    startLoading();
    authenticateFetch(
      formatRoute(ApiRoutes.Patient.CaseReport.Upsert, patientId),
      {
        body: JSON.stringify({ caseReport }),
        method: 'POST',
      }
    )
      .then<UpsertCaseReportSuccess>((x) => x.json())
      .then(successCallback)
      .catch(errorCallback)
      .finally(endLoading);
  };

  return {
    saveCaseReport,
  };
};
