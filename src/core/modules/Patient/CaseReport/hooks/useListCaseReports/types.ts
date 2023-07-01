import { ListCaseReportResume } from '~/core/api/patient/caseReport/types';

export type UseListCaseReportsState = {
  patientName: string;
  caseReports: ListCaseReportResume[];
  totalItems: number;
};

export type UseListCaseReports = () => Pick<
  UseListCaseReportsState,
  'patientName' | 'caseReports' | 'totalItems'
> & {
  patientId: string;
};
