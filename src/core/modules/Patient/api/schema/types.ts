import { InferType } from 'yup';

import { ReplaceNestedDates } from '../../../../../common/types/ReplaceNestedDates';
import { createPatientSchema } from './schema';

export type PatientFieldsWithoutId = ReplaceNestedDates<
  InferType<ReturnType<typeof createPatientSchema>>
>;

export type PatientFields = Omit<PatientFieldsWithoutId, 'id'> & {
  id: string;
};
