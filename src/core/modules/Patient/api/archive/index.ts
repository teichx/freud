import { NextResponse } from 'next/server';

import { EnumHttpStatus, sendError } from '~/core/api';
import { getCustomerId } from '~/core/modules/Customer/auth';

import { Patient } from '../model';
import { ArchiveOrUnarchivePatientHandler } from './types';

export const archive: ArchiveOrUnarchivePatientHandler = async (req, ctx) => {
  const { authError, customerId } = await getCustomerId();
  if (!customerId) return sendError({ error: authError });

  const { patientId } = ctx.params;
  if (!patientId) return sendError({ error: 'patientId in query is required' });

  await Patient.update(
    {
      PK: customerId,
      SK: patientId,
    },
    {
      archivedAt: new Date().toISOString(),
    }
  );

  return NextResponse.json({}, { status: EnumHttpStatus.Success });
};

export const unarchive: ArchiveOrUnarchivePatientHandler = async (req, ctx) => {
  const { authError, customerId } = await getCustomerId();
  if (!customerId) return sendError({ error: authError });

  const { patientId } = ctx.params;
  if (!patientId) return sendError({ error: 'patientId in query is required' });

  await Patient.update(
    {
      PK: customerId,
      SK: patientId,
    },
    {
      archivedAt: undefined,
    }
  );

  return NextResponse.json({}, { status: EnumHttpStatus.Success });
};
