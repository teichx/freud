import { ErrorMessage, RequestQueryHandler } from '../../../common';
import { CaseReportProps } from './caseReport';

export type GetCaseReportProps = Pick<
  CaseReportProps,
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
