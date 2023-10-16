import { ListCaseReportResume } from '../../../../api/list/types';

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
