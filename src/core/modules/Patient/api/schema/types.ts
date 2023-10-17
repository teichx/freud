import { InferType } from 'yup';

import { ReplaceNestedDates } from '../../../../../common/types/ReplaceNestedDates';
import { patientSchema } from './schema';

export type PatientFieldsWithoutId = ReplaceNestedDates<
  InferType<typeof patientSchema>
>;

export type PatientFields = Omit<PatientFieldsWithoutId, 'id'> & {
  id: string;
};
