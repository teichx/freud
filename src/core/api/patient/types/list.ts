import { PaginateQueryProps, PaginateResultTotalItems } from '~/common/query';
import { PatientFields } from '~/core/contract';

import { ErrorMessage, RequestQueryHandler } from '../../common';

export type ListPatientResume =
  | Pick<PatientFields, 'id' | 'name'> &
      Pick<
        NonNullable<PatientFields['calculated']>,
        'lastCaseReport' | 'caseReportCount'
      >;

export type ListPatientSuccess<
  TPatient extends ListPatientResume = ListPatientResume
> = PaginateResultTotalItems & {
  patients: TPatient[];
};

export type ListPatientResponse = ListPatientSuccess | ErrorMessage;

export type ListPatientQueryProps = PaginateQueryProps & {
  showArchived?: boolean;
  patientName?: string;
};

export type ListPatientHandler = RequestQueryHandler<
  ListPatientQueryProps,
  ListPatientResponse
>;
