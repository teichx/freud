import { PatientFields } from '~/core/sections/PatientForm/types';

import { ErrorMessage } from '../../common';

export type ListPatientSuccess<TPatient = PatientFields> = {
  patients: TPatient[];
  page: number;
  limit: number;
};

export type ListPatientResponse = ListPatientSuccess | ErrorMessage;
