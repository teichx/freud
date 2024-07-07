import { ErrorMessage, RequestQueryHandler } from '~/core/api';
import { CaseReportFields } from '~/core/modules/Patient/CaseReport/api/schema/types';

export type ListCaseReportResume = Pick<
  CaseReportFields,
  'id' | 'reportingDate' | 'content'
>;

export type ListCaseReportSuccess = {
  items: ListCaseReportResume[];
  hasNextPage: boolean;
};

export type ListCaseReportResponse = ListCaseReportSuccess | ErrorMessage;

export type ListCaseReportHandler = RequestQueryHandler<
  { patientId: string },
  ListCaseReportResponse
>;
