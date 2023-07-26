import * as yup from 'yup';

import {
  marriageStatus,
  schooling,
} from '~/common/components/Form/FormSelect/options';
import {
  isEmptyOrCpf,
  numbersOnly,
  objectToUniqueList,
} from '~/common/helpers';
import { COGNITIVE_FIELDS } from '~/core/modules/Patient/PatientForm/constants';

export const patientSchema = yup.object().shape({
  id: yup.string(),
  personal: yup.object().shape({
    name: yup.string().required(),
    birth: yup.date().min('1900-01-01').max(new Date()),
    gender: yup.string(),
    profession: yup.string(),
    cpf: yup.string().test(isEmptyOrCpf),
    rg: yup.string().transform(numbersOnly),
    schooling: yup.string().oneOf(schooling),
    marriageStatus: yup.string().oneOf(marriageStatus),
    address: yup.string(),
    phoneNumber: yup.string(),
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
    cognitive: yup
      .array()
      .transform(objectToUniqueList)
      .of(yup.string().oneOf(COGNITIVE_FIELDS.cognitive)),
    emotional: yup
      .array()
      .transform(objectToUniqueList)
      .of(yup.string().oneOf(COGNITIVE_FIELDS.emotional)),
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
  }),
  calculated: yup.object().shape({
    caseReportCount: yup.number(),
    lastCaseReport: yup.date(),
  }),
});