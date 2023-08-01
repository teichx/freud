import { CaseReportFields, CaseReportFieldsWithoutId } from '~/core/contract';

import { ErrorMessage, RequestBodyHandler } from '../../../common';

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
