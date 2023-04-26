import { marriage_status, schooling } from '~/core/locales/options';

import {
  COGNITIVE_FIELDS,
  FREE_TEXT_FIELDS,
  FIRST_CONSULT_FIELDS,
  COMPLAINED_HISTORY_FIELDS,
} from './constants';

export type PersonalDataFields = {
  name: string;
  age?: number;
  gender?: string;
  profession?: string;
  cpf?: string;
  rg?: string;
  schooling?: (typeof schooling)[number];
  marriage_status?: (typeof marriage_status)[number];
  address?: string;
  phone_number?: string;
  emergency?: string;
};

export type FirstConsultFields = {
  [key in (typeof FIRST_CONSULT_FIELDS)[number]]?: string;
};

export type ComplainedHistoryFields = {
  [key in (typeof COMPLAINED_HISTORY_FIELDS)[number]]?: string;
};

export type CognitiveFields = {
  cognitive: { other?: string } & {
    [key in (typeof COGNITIVE_FIELDS.cognitive)[number]]?: boolean;
  };
  emotional: { other?: string } & {
    [key in (typeof COGNITIVE_FIELDS.emotional)[number]]?: boolean;
  };
};

export type FreeTextFieldFields = {
  [key in (typeof FREE_TEXT_FIELDS)[number]]?: string;
};

export type PatientMetaFields = {
  id: string;
  archived_at: string;
};

export type PatientCalculatedFields = {
  case_report_count: number;
  last_case_report: string | undefined;
};

export type PatientFields = PersonalDataFields &
  FirstConsultFields &
  ComplainedHistoryFields &
  CognitiveFields &
  FreeTextFieldFields &
  PatientMetaFields &
  PatientCalculatedFields;

export type PatientFieldsWithoutId = Omit<PatientFields, 'id'>;
