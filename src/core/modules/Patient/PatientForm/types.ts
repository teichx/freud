import {
  MarriageStatusOptions,
  SchoolingOptions,
} from '~/common/components/Form/FormSelect/options';

import {
  COGNITIVE_FIELDS,
  FREE_TEXT_FIELDS,
  FIRST_CONSULT_FIELDS,
  COMPLAINED_HISTORY_FIELDS,
} from './constants';

export type PatientFields = {
  id: string;
  personal: {
    name: string;
    birth?: string;
    gender?: string;
    profession?: string;
    cpf?: string;
    rg?: string;
    schooling?: SchoolingOptions;
    marriageStatus?: MarriageStatusOptions;
    address?: string;
    phoneNumber?: string;
    emergency?: string;
  };
  firstConsult?: { [key in (typeof FIRST_CONSULT_FIELDS)[number]]?: string };
  history?: { [key in (typeof COMPLAINED_HISTORY_FIELDS)[number]]?: string };
  symptoms?: {
    cognitive: { other?: string } & {
      [key in (typeof COGNITIVE_FIELDS.cognitive)[number]]?: boolean;
    };
    emotional: { other?: string } & {
      [key in (typeof COGNITIVE_FIELDS.emotional)[number]]?: boolean;
    };
  };
  freeText?: { [key in (typeof FREE_TEXT_FIELDS)[number]]?: string };
  calculated?: {
    caseReportCount: number;
    lastCaseReport: string | undefined;
  };
};

export type PatientFieldsWithoutId = Omit<PatientFields, 'id'>;
