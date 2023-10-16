import { PaginateQueryProps, PaginateResultTotalItems } from '~/common/query';
import { ErrorMessage, RequestQueryHandler } from '~/core/api';

import { PatientFields } from '../schema/types';

export type ListPatientResume =
  | Pick<PatientFields, 'id' | 'name' | 'archivedAt'> &
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

export enum EnumListPatientStatus {
  Archived = 'archived',
  Unarchive = 'unarchive',
}

export type ListPatientQueryProps = PaginateQueryProps & {
  status?: EnumListPatientStatus;
  patientName?: string;
};

export type ListPatientHandler = RequestQueryHandler<
  ListPatientQueryProps,
  ListPatientResponse
>;
