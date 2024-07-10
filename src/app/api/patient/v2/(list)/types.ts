import { ErrorMessage, RequestQueryHandler } from '~/core/api';
import { PatientFields } from '~/core/modules/Patient/api/schema/types';

export type ListPatientResume =
  | Pick<PatientFields, 'id' | 'name' | 'archivedAt'> &
      Pick<
        NonNullable<PatientFields['calculated']>,
        'lastCaseReport' | 'caseReportCount'
      >;

export type ListPatientSuccess<
  TPatient extends ListPatientResume = ListPatientResume
> = {
  items: TPatient[];
  hasNextPage: boolean;
};

export type ListPatientResponse = ListPatientSuccess | ErrorMessage;

export enum EnumListPatientStatus {
  Archived = 'archived',
  Unarchive = 'unarchive',
}

export type ListPatientQueryProps = {
  status?: EnumListPatientStatus;
  patientName?: string;
  limit: number;
  lastId: string | undefined;
};

export type ListPatientHandler = RequestQueryHandler<
  ListPatientQueryProps,
  ListPatientResponse
>;
