import { NextResponse } from 'next/server';

import { Patient } from '~/app/api/patient/v2/model';
import { listToObject } from '~/common/validation';
import { sendError } from '~/core/api';
import { getCustomerId } from '~/core/modules/Customer/auth';

import { GetPatientHandler } from './types';

export const getById: GetPatientHandler = async (req, ctx) => {
  const { authError, customerId } = await getCustomerId();
  if (!customerId) return sendError({ error: authError });

  const { patientId } = ctx.params;
  if (!patientId) return sendError({ error: 'patientId in query is required' });

  const [patient] = await Patient.query({
    PK: { eq: customerId },
    SK: { eq: patientId },
  }).exec();

  if (!patient) {
    return sendError({
      error: 'Patient not found',
      status: 'NotFound',
    });
  }

  const { contact, personal } = patient;
  return NextResponse.json({
    patient: {
      ...patient,
      contact: {
        ...contact,
        address: contact?.address || personal?.address,
        phoneNumber: contact?.phoneNumber || personal?.phoneNumber,
        emergency: contact?.emergency || personal?.emergency,
      },
      symptoms: {
        ...patient.symptoms,
        cognitive: listToObject(patient.symptoms.cognitive),
        emotional: listToObject(patient.symptoms.emotional),
      },
    },
  });
};
