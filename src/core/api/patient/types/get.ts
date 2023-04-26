import { PatientFields } from '~/core/sections/PatientForm/types';

import { ErrorMessage } from '../../types';

export type GetPatientSuccess = {
  patient: PatientFields | undefined;
};

export type GetPatientResponse = GetPatientSuccess | ErrorMessage;

export type GetPatientProps = {
  id: string;
};
