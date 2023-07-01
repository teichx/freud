import { ErrorMessage, RequestQueryHandler } from '../../../common';
import { PaginateQueryProps } from '../../../common/paginate/types';
import { CaseReportProps } from './caseReport';

export type ListCaseReportResume = Pick<
  CaseReportProps,
  'id' | 'reportingDate'
> & {
  resume: string;
};

export type ListCaseReportSuccess = {
  caseReports: ListCaseReportResume[];
  patientName: string;
  page: number;
  limit: number;
  totalItems: number;
};

export type ListCaseReportResponse = ListCaseReportSuccess | ErrorMessage;

export type ListCaseReportHandler = RequestQueryHandler<
  PaginateQueryProps,
  ListCaseReportResponse
>;
