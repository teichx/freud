export type CaseReportProps = {
  id: string;
  content: string;
  patientId: string;
  reportingDate: string;
};

export type CasesReportWithoutIdProps = Omit<CaseReportProps, 'id'>;
