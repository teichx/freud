import { NextResponse } from 'next/server';

import { sendError } from '~/core/api';
import { getCustomerId } from '~/core/modules/Customer/auth';

import { Patient } from '../model';
import { GetPatientHandler } from './types';

export const get: GetPatientHandler = async (req, ctx) => {
  const { authError, customerId } = await getCustomerId();
  if (!customerId) return sendError({ error: authError });

  const { patientId: id } = ctx.params;
  if (!id) return sendError({ error: 'patientId in query is required' });

  const [patient] = await Patient.query({
    PK: { eq: customerId },
    SK: { eq: id },
  }).exec();

  if (!patient) {
    return sendError({
      error: 'Patient not found',
      status: 'NotFound',
    });
  }

  return NextResponse.json({
    patient,
  });
};
