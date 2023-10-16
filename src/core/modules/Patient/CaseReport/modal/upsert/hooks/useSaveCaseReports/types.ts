import {
  CaseReportFields,
  CaseReportFieldsWithoutId,
} from '../../../../api/schema';
import { UpsertCaseReportSuccess } from '../../../../api/upsert/upsert';

export type UseSaveCaseReportsProps = {
  patientId: string;
  successCallback?: (props: UpsertCaseReportSuccess) => void;
  errorCallback?: () => void;
};

export type UseSaveCaseReports = (props: UseSaveCaseReportsProps) => {
  saveCaseReport: (
    caseReport: CaseReportFields | CaseReportFieldsWithoutId
  ) => void;
};
