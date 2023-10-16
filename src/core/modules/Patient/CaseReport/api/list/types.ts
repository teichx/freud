import { PaginateQueryProps } from '~/common/query';
import { ErrorMessage, RequestQueryHandler } from '~/core/api';
import { CaseReportFields } from '~/core/modules/Patient/CaseReport/api/schema/types';

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
