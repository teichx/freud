import { ListCaseReportResume } from '../../../../api/list/types';
import { CaseReportFields } from '../../../../api/schema';

export type PatientCaseReportTableProps = {
  patientId: string;
  patientName: string;
  totalItems: number;
  caseReports: ListCaseReportResume[];
};

export type CaseReportResumeProps = {
  patient: {
    id: string;
    name: string;
  };
  caseReports: CaseReportFields[];
};
