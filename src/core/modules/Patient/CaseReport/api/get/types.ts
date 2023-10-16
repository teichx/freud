import { ErrorMessage, RequestQueryHandler } from '~/core/api';

import { CaseReportFields } from '../schema';

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
