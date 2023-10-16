import { ErrorMessage, RequestBodyHandler } from '~/core/api';

import { CaseReportFields, CaseReportFieldsWithoutId } from '../schema';

export type UpsertCaseReportSuccess = {
  id: string;
};

export type UpsertCaseReportResponse = UpsertCaseReportSuccess | ErrorMessage;

export type UpsertCaseReportBodyProps = {
  caseReport: CaseReportFieldsWithoutId & Partial<Pick<CaseReportFields, 'id'>>;
};

export type UpsertCaseReportHandler = RequestBodyHandler<
  UpsertCaseReportBodyProps,
  UpsertCaseReportResponse
>;
