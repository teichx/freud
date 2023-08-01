import { ListCaseReportResume } from '~/core/api/patient/caseReport/types';
import { CaseReportFields } from '~/core/contract';

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
