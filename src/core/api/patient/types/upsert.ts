import {
  PatientFields,
  PatientFieldsWithoutId,
} from '~/core/sections/PatientForm/types';

import { ErrorMessage } from '../../common';

export type UpsertPatientSuccess = {
  id: string;
};

export type UpsertPatientResponse = UpsertPatientSuccess | ErrorMessage;

export type UpsertPatientBodyProps = {
  patient: PatientFields | PatientFieldsWithoutId;
};
