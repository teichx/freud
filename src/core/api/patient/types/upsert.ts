import {
  PatientFields,
  PatientFieldsWithoutId,
} from '~/core/modules/Patient/PatientForm/types';

import { ErrorMessage, RequestBodyHandler } from '../../common';

export type UpsertPatientSuccess = {
  id: string;
};

export type UpsertPatientResponse = UpsertPatientSuccess | ErrorMessage;

export type UpsertPatientBodyProps = {
  patient: PatientFieldsWithoutId & Partial<Pick<PatientFields, 'id'>>;
};

export type UpsertPatientHandler = RequestBodyHandler<
  UpsertPatientBodyProps,
  UpsertPatientResponse
>;
