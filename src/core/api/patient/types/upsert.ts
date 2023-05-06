import {
  PatientFields,
  PatientFieldsWithoutId,
} from '~/core/sections/PatientForm/types';

import {
  ErrorMessage,
  ReqCustomQueryProps,
  RequestHandler,
} from '../../common';

export type UpsertPatientSuccess = {
  id: string;
};

export type UpsertPatientResponse = UpsertPatientSuccess | ErrorMessage;

export type UpsertPatientBodyProps = {
  patient: PatientFields | PatientFieldsWithoutId;
};

export type UpsertPatientQueryProps = Partial<string>;

export type UpsertPatientReqProps =
  ReqCustomQueryProps<UpsertPatientQueryProps>;

export type UpsertPatientHandler = RequestHandler<
  UpsertPatientQueryProps,
  UpsertPatientResponse
>;
