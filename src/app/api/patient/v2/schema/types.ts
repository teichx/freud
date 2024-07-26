import { InferType } from 'yup';

import { ReplaceNestedDates } from '../../../../../common/types/ReplaceNestedDates';
import { getPatientSchema } from './schema';

export type PatientFieldsWithoutId = ReplaceNestedDates<
  InferType<ReturnType<typeof getPatientSchema>>
>;

export type PatientFields = Omit<PatientFieldsWithoutId, 'id'> & {
  id: string;
};

export type ParsedPatientFields = PatientFields;
