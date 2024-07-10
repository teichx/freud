import * as yup from 'yup';

import { objectToUniqueList } from '~/common/validation';

import { EnumListPatientStatus } from './types';

export const createListPatientsSchema = () =>
  yup.object().shape({
    limit: yup.number().min(1).required(),
    lastId: yup.string().optional(),
    patientName: yup.string().optional(),
    status: yup
      .array()
      .transform(objectToUniqueList)
      .of(yup.string().oneOf(Object.values(EnumListPatientStatus)))
      .min(1)
      .required(),
  });
