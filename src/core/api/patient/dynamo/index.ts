import { ulid } from 'ulid';

import { getPaginate } from '~/common/query';
import { patientSchema } from '~/core/contract/patient/schema';

import { getCustomerId } from '../../auth/authorization';
import { sendError } from '../../common';
import { EnumHttpStatus } from '../../constants';
import { Patient } from '../../model';
import {
  UpsertPatientHandler,
  GetPatientHandler,
  ListPatientHandler,
} from '../types';

export const upsert: UpsertPatientHandler = async (req, res) => {
  const { authError, customerId } = getCustomerId(req);
  if (!customerId) return sendError({ res, error: authError });

  const receivedId = req.body.patient?.id;
  const id = receivedId || ulid();

  const patient = {
    ...(await patientSchema.validate(req.body.patient)),
    updatedAt: new Date().toISOString(),
  };

  if (!receivedId) {
    const payload = {
      ...patient,
      createdAt: new Date().toISOString(),
      PK: customerId,
      SK: id,
    };
    await Patient.create(payload);

    return res.status(EnumHttpStatus.Created).send({
      id,
    });
  }

  await Patient.update(
    {
      PK: customerId,
      SK: id,
    },
    patient
  );

  return res.status(EnumHttpStatus.Success).send({
    id,
  });
};

export const get: GetPatientHandler = async (req, res) => {
  const { authError, customerId } = getCustomerId(req);
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

export const list: ListPatientHandler = async (req, res) => {
  const { authError, customerId } = getCustomerId(req);
  if (!customerId) return sendError({ res, error: authError });

  const { error, limit, getPagination } = getPaginate({
    req,
  });
  if (error) return sendError({ res, error });

  const getQueryWithFilters = () =>
    Patient.query({
      PK: { eq: customerId },
    });

  const patientsQuery = getQueryWithFilters()
    .attributes(['SK', 'name', 'calculated'])
    .limit(limit)
    .exec();

  const patientsCountQuery = getQueryWithFilters().count().exec();

  const [patients, patientsCount] = await Promise.all([
    patientsQuery,
    patientsCountQuery,
  ]);

  return res.status(EnumHttpStatus.Success).send({
    ...getPagination({ totalItems: patientsCount.count }),
    patients: patients.map((x) => ({
      id: x.id,
      name: x.name,
      lastCaseReport: x.calculated?.lastCaseReport,
      caseReportCount: x.calculated?.caseReportCount || 0,
    })),
  });
};
