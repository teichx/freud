import { InferType } from 'yup';

import { ReplaceNestedDates } from '../../../../../common/types/ReplaceNestedDates';
import { getPatientSchema } from './schema';

export type PatientFieldsWithoutId = ReplaceNestedDates<
  InferType<ReturnType<typeof getPatientSchema>>
>;

export type PatientFields = Omit<PatientFieldsWithoutId, 'id'> & {
  id: string;
};

type CognitiveParser<T extends (string | undefined)[] | undefined> = {
  [key in NonNullable<NonNullable<T>[number]>]: boolean;
};

export type ParsedPatientFields = Omit<PatientFields, 'symptoms'> & {
  symptoms: Omit<PatientFields['symptoms'], 'cognitive' | 'emotional'> & {
    cognitive?: CognitiveParser<PatientFields['symptoms']['cognitive']>;
    emotional?: CognitiveParser<PatientFields['symptoms']['emotional']>;
  };
};
