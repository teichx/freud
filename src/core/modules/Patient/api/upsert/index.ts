import { NextResponse } from 'next/server';
import { ulid } from 'ulid';

import { EnumHttpStatus, sendError } from '~/core/api';
import { getCustomerId } from '~/core/modules/Customer/auth';

import { Patient } from '../model';
import { parseSearchTerm } from '../parseSearchTerm';
import { createPatientSchema } from '../schema/schema';
import { UpsertPatientHandler } from './types';

export const upsert: UpsertPatientHandler = async (req) => {
  const { authError, customerId } = await getCustomerId();
  if (!customerId) return sendError({ error: authError });

  const body = await req.json();
  const receivedId = body.patient?.id;
  const id = receivedId || ulid();
  const keys = {
    PK: customerId,
    SK: id,
  } as const;

  const bodyPatient = await createPatientSchema().validate(body.patient);
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

    return NextResponse.json(
      {
        id,
      },
      {
        status: EnumHttpStatus.Created,
      }
    );
  }

  await Patient.update(keys, patient);

  return NextResponse.json({
    id,
  });
};
