import * as yup from 'yup';

import {
  marriageStatus,
  schooling,
} from '~/common/components/Form/FormSelect/options';
import {
  isEmptyOrCpf,
  numbersOnly,
  objectToUniqueList,
} from '~/common/validation';
import { COGNITIVE_FIELDS } from '~/core/modules/Patient/pages/upsert/components/PatientForm/constants';

export const getPatientSchema = () =>
  yup.object().shape({
    id: yup.string(),
    name: yup.string().required().trim(),
    archivedAt: yup.date().withMutation(() => yup.string()),
    searchTerm: yup.string(),
    personal: yup.object().shape({
      birth: yup
        .date()
        .min('1900-01-01')
        .max(new Date().toISOString().split('T')[0]),
      gender: yup.string(),
      profession: yup.string(),
      cpf: yup.string().transform(numbersOnly).test(isEmptyOrCpf),
      rg: yup.string().transform(numbersOnly),
      schooling: yup.string().oneOf(schooling),
      marriageStatus: yup.string().oneOf(marriageStatus),
    }),
    contact: yup.object().shape({
      email: yup.string().email(),
      address: yup.string(),
      phoneNumber: yup.string().transform(numbersOnly),
      emergency: yup.string(),
    }),
    firstConsult: yup.object().shape({
      principalReason: yup.string(),
      appearanceAndBehavior: yup.string(),
      demandAssessment: yup.string(),
    }),
    history: yup.object().shape({
      problemInitiation: yup.string(),
      frequencyAndIntensity: yup.string(),
      previousTreatments: yup.string(),
      medication: yup.string(),
    }),
    symptoms: yup.object().shape({
      cognitiveDetails: yup.string(),
      cognitive: yup
        .array()
        .transform(objectToUniqueList)
        .of(yup.string().oneOf(COGNITIVE_FIELDS.cognitive))
        .transform((x: string[]) => (x.length ? x : undefined)),
      emotionalDetails: yup.string(),
      emotional: yup
        .array()
        .transform(objectToUniqueList)
        .of(yup.string().oneOf(COGNITIVE_FIELDS.emotional))
        .transform((x: string[]) => (x.length ? x : undefined)),
    }),
    freeText: yup.object().shape({
      lifestyle: yup.string(),
      familyHistory: yup.string(),
      familyRelationship: yup.string(),
      traumaticEvents: yup.string(),
      affectiveExperiences: yup.string(),
      importantFacts: yup.string(),
      prognosis: yup.string(),
      treatment: yup.string(),
      other: yup.string(),
    }),
    calculated: yup.object().shape({
      caseReportCount: yup.number(),
      lastCaseReport: yup.date().withMutation(() => yup.string()),
    }),
  });
