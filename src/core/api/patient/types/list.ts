import { PatientFields } from '~/core/sections/PatientForm/types';

import {
  ErrorMessage,
  ReqCustomQueryProps,
  RequestHandler,
} from '../../common';
import { PaginateQueryProps } from '../../common/paginate/types';

export type ListPatientSuccess<TPatient = PatientFields> = {
  patients: TPatient[];
  page: number;
  limit: number;
};

export type ListPatientResponse = ListPatientSuccess | ErrorMessage;

export type ListPatientQueryProps = PaginateQueryProps & {
  showArchived?: boolean;
};

export type ListPatientReqProps = ReqCustomQueryProps<ListPatientQueryProps>;

export type ListPatientHandler = RequestHandler<
  ListPatientQueryProps,
  ListPatientResponse
>;
