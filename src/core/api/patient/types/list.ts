import { PatientFields } from '~/core/sections/PatientForm/types';

import { ErrorMessage } from '../../common';

export type ListPatientSuccess = {
  patients: PatientFields[];
  page: number;
  limit: number;
};

export type ListPatientResponse = ListPatientSuccess | ErrorMessage;
