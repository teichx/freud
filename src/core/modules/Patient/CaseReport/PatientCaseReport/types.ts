import { CaseReportProps } from '~/core/api/patient/caseReport/types';

export type PatientCaseReportProps = {
  patient: {
    id: string;
    name: string;
  };
  caseReportId?: string;
};

export type CaseReportFormProps = Pick<
  CaseReportProps,
  'content' | 'id' | 'patientId' | 'reportingDate'
>;
