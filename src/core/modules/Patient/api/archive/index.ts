import { EnumHttpStatus, sendError } from '~/core/api';
import { getCustomerId } from '~/core/modules/Customer/auth';

import { Patient } from '../model';
import { ArchiveOrUnarchivePatientHandler } from './types';

export const archive: ArchiveOrUnarchivePatientHandler = async (req, res) => {
  const { authError, customerId } = await getCustomerId(req, res);
  if (!customerId) return sendError({ res, error: authError });

  const { patientId } = req.query;
  if (!patientId)
    return sendError({ res, error: 'patientId in query is required' });

  await Patient.update(
    {
      PK: customerId,
      SK: patientId,
    },
    {
      archivedAt: new Date().toISOString(),
    }
  );

  res.status(EnumHttpStatus.Success).send({});
};

export const unarchive: ArchiveOrUnarchivePatientHandler = async (req, res) => {
  const { authError, customerId } = await getCustomerId(req, res);
  if (!customerId) return sendError({ res, error: authError });

  const { patientId } = req.query;
  if (!patientId)
    return sendError({ res, error: 'patientId in query is required' });

  await Patient.update(
    {
      PK: customerId,
      SK: patientId,
    },
    {
      archivedAt: undefined,
    }
  );

  res.status(EnumHttpStatus.Success).send({});
};
