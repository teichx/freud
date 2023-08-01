import { InferType } from 'yup';

import { caseReportSchema } from './schema';

export const CASE_REPORT_RESUME_LENGTH = 170;

export type CaseReportFieldsWithoutId = InferType<typeof caseReportSchema>;

export type CaseReportFields = Omit<CaseReportFieldsWithoutId, 'id'> & {
  id: string;
};

export type CaseReportModelFields = Omit<CaseReportFields, 'id'> & {
  PK: string;
  SK: string;
  resume: string;
};
