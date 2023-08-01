import { CaseReportFields } from '~/core/contract';

export type PatientCaseReportProps = {
  patient: {
    id: string;
    name: string;
  };
  caseReportId?: string;
};

export type CaseReportFormProps = Pick<
  CaseReportFields,
  'content' | 'id' | 'patientId' | 'reportingDate'
>;
