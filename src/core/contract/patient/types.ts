import { InferType } from 'yup';

import { patientSchema } from './schema';

export type PatientFieldsWithoutId = InferType<typeof patientSchema>;

export type PatientFields = Omit<PatientFieldsWithoutId, 'id'> & {
  id: string;
};
