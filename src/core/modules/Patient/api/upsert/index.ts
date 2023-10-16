import { ulid } from 'ulid';

import { EnumHttpStatus, sendError } from '~/core/api';
import { getCustomerId } from '~/core/modules/Customer/auth';

import { Patient } from '../model';
import { parseSearchTerm } from '../parseSearchTerm';
import { patientSchema } from '../schema/schema';
import { UpsertPatientHandler } from './types';

export const upsert: UpsertPatientHandler = async (req, res) => {
  const { authError, customerId } = await getCustomerId(req, res);
  if (!customerId) return sendError({ res, error: authError });

  const receivedId = req.body.patient?.id;
  const id = receivedId || ulid();
  const keys = {
    PK: customerId,
    SK: id,
  } as const;

  const bodyPatient = await patientSchema.validate(req.body.patient);
  const patient = {
    ...bodyPatient,
    searchTerm: parseSearchTerm([bodyPatient.name]),
    personal: {
      ...(bodyPatient.personal || {}),
      birth: bodyPatient?.personal.birth?.toISOString(),
    },
  };

  if (!receivedId) {
    await Patient.create({
      ...keys,
      ...patient,
    });

    return res.status(EnumHttpStatus.Created).send({
      id,
    });
  }

  await Patient.update(keys, patient);

  return res.status(EnumHttpStatus.Success).send({
    id,
  });
};
