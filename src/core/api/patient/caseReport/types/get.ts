import { CaseReportFields } from '~/core/contract';

import { ErrorMessage, RequestQueryHandler } from '../../../common';

export type GetCaseReportProps = Pick<
  CaseReportFields,
  'id' | 'content' | 'reportingDate'
>;

export type GetCaseReportSuccess = {
  caseReport: GetCaseReportProps;
  patientName: string;
};

export type GetCaseReportResponse = GetCaseReportSuccess | ErrorMessage;

export type GetCaseReportHandler = RequestQueryHandler<
  { patientId: string; caseReportId: string },
  GetCaseReportResponse
>;
