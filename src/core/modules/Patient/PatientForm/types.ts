import { marriageStatus, schooling } from '~/core/locales/options';

import {
  COGNITIVE_FIELDS,
  FREE_TEXT_FIELDS,
  FIRST_CONSULT_FIELDS,
  COMPLAINED_HISTORY_FIELDS,
} from './constants';

export type PersonalDataFields = {
  name: string;
  birth?: string;
  gender?: string;
  profession?: string;
  cpf?: string;
  rg?: string;
  schooling?: (typeof schooling)[number];
  marriageStatus?: (typeof marriageStatus)[number];
  address?: string;
  phoneNumber?: string;
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
  archivedAt: string;
};

export type PatientCalculatedFields = {
  caseReportCount: number;
  lastCaseReport: string | undefined;
};

export type PatientFields = PersonalDataFields &
  FirstConsultFields &
  ComplainedHistoryFields &
  CognitiveFields &
  FreeTextFieldFields &
  PatientMetaFields &
  PatientCalculatedFields;

export type PatientFieldsWithoutId = Omit<PatientFields, 'id'>;
