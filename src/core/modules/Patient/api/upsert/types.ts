import { ErrorMessage, RequestBodyHandler } from '~/core/api';

import { PatientFields, PatientFieldsWithoutId } from '../schema/types';

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
