import { UpsertCaseReportSuccess } from '~/core/api/patient/caseReport/types';
import { CaseReportFields, CaseReportFieldsWithoutId } from '~/core/contract';

export type UseSaveCaseReportsProps = {
  patientId: string;
  successCallback?: (props: UpsertCaseReportSuccess) => void;
  errorCallback?: () => void;
};

export type UseSaveCaseReports = (props: UseSaveCaseReportsProps) => {
  saveCaseReport: (
    caseReport: CaseReportFields | CaseReportFieldsWithoutId
  ) => void;
};
