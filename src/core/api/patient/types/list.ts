import { PatientFields } from '~/core/sections/PatientForm/types';

import { ErrorMessage } from '../../types';

export type ListPatientSuccess = {
  patients: PatientFields[];
  page: number;
  limit: number;
};

export type ListPatientResponse = ListPatientSuccess | ErrorMessage;
