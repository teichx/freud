import { EnumHttpStatus, sendError } from '~/core/api';
import { getCustomerId } from '~/core/modules/Customer/auth';

import { Patient } from '../model';
import { GetPatientHandler } from './types';

export const get: GetPatientHandler = async (req, res) => {
  const { authError, customerId } = await getCustomerId(req, res);
  if (!customerId) return sendError({ res, error: authError });

  const { patientId: id } = req.query;
  if (!id) return sendError({ res, error: 'patientId in query is required' });

  const [patient] = await Patient.query({
    PK: { eq: customerId },
    SK: { eq: id },
  }).exec();

  if (!patient) {
    return sendError({
      res,
      error: 'Patient not found',
      status: 'NotFound',
    });
  }

  return res.status(EnumHttpStatus.Success).send({
    patient,
  });
};
