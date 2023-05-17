export type PatientCaseReportProps = {
  patientName: string;
  caseReport: CaseReportProps | ToCreateCaseReportProps;
};

export type ToCreateCaseReportProps = {
  [key in keyof CaseReportProps]?: CaseReportProps[key];
} & Pick<CaseReportProps, 'patientId'>;

export type CaseReportProps = {
  id: string;
  content: string;
  patientId: string;
  reportingDate: string;
};

export type CaseReportFormProps = {
  patientName: string;
  caseReport: Pick<
    CaseReportProps,
    'content' | 'id' | 'patientId' | 'reportingDate'
  >;
};
