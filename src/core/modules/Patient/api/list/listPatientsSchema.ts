import * as yup from 'yup';

import { objectToUniqueList } from '~/common/validation';

import { EnumListPatientStatus } from './types';

export const createListPatientsSchema = () =>
  yup.object().shape({
    page: yup.number().min(1).required(),
    limit: yup.number().min(1).required(),
    patientName: yup.string().optional(),
    status: yup
      .array()
      .transform(objectToUniqueList)
      .of(yup.string().oneOf(Object.values(EnumListPatientStatus)))
      .min(1)
      .required(),
  });
