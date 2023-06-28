import { PatientFields } from '~/core/modules/Patient/PatientForm/types';

import { ErrorMessage, RequestQueryHandler } from '../../common';
import {
  PaginateQueryProps,
  PaginateResultTotalItems,
} from '../../common/paginate/types';

export type ListPatientResume = Pick<
  PatientFields,
  'id' | 'name' | 'lastCaseReport' | 'caseReportCount'
>;

export type ListPatientSuccess<
  TPatient extends ListPatientResume = ListPatientResume
> = PaginateResultTotalItems & {
  patients: TPatient[];
};

export type ListPatientResponse = ListPatientSuccess | ErrorMessage;

export type ListPatientQueryProps = PaginateQueryProps & {
  showArchived?: boolean;
};

export type ListPatientHandler = RequestQueryHandler<
  ListPatientQueryProps,
  ListPatientResponse
>;
