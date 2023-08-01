import { PaginateQueryProps } from '~/common/query';
import { CaseReportFields } from '~/core/contract';

import { ErrorMessage, RequestQueryHandler } from '../../../common';

export type ListCaseReportResume = Pick<
  CaseReportFields,
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
  PaginateQueryProps & { patientId: string },
  ListCaseReportResponse
>;
