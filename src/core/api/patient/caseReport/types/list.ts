import { PaginateQueryProps } from '~/common/query';

import { ErrorMessage, RequestQueryHandler } from '../../../common';
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
