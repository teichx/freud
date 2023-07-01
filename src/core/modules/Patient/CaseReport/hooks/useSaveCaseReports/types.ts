import {
  CaseReportProps,
  CasesReportWithoutIdProps,
  UpsertCaseReportSuccess,
} from '~/core/api/patient/caseReport/types';

export type UseSaveCaseReportsProps = {
  patientId: string;
  successCallback?: (props: UpsertCaseReportSuccess) => void;
  errorCallback?: () => void;
};

export type UseSaveCaseReports = (props: UseSaveCaseReportsProps) => {
  saveCaseReport: (
    caseReport: CaseReportProps | CasesReportWithoutIdProps
  ) => void;
};
