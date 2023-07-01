import { GetCaseReportProps } from '~/core/api/patient/caseReport/types';

export type UseGetCaseReportState = {
  caseReport: GetCaseReportProps;
};

export type UseGetCaseReport = ({
  patientId,
}: {
  patientId: string;
}) => UseGetCaseReportState & {
  getById: (props: { caseReportId: string | undefined }) => void;
  reset: () => void;
};
