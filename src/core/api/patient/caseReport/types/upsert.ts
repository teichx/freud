import { ErrorMessage, RequestBodyHandler } from '../../../common';
import { CaseReportProps, CasesReportWithoutIdProps } from './caseReport';

export type UpsertCaseReportSuccess = {
  id: string;
};

export type UpsertCaseReportResponse = UpsertCaseReportSuccess | ErrorMessage;

export type UpsertCaseReportBodyProps = {
  caseReport: CasesReportWithoutIdProps & Partial<Pick<CaseReportProps, 'id'>>;
};

export type UpsertCaseReportHandler = RequestBodyHandler<
  UpsertCaseReportBodyProps,
  UpsertCaseReportResponse
>;
