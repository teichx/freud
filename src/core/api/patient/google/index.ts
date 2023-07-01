import { ulid } from 'ulid';

import { getPaginate, sendError } from '../../common';
import { EnumHttpStatus } from '../../constants';
import {
  UpsertPatientHandler,
  GetPatientHandler,
  ListPatientHandler,
  ListPatientResume,
} from '../types';

export const upsert: UpsertPatientHandler = async (req, res) => {
  // TODO: Upsert patient
  const id = ulid();

  return res.status(EnumHttpStatus.Success).send({
    id,
  });
};

export const get: GetPatientHandler = async (req, res) => {
  const { patientId: id } = req.query;
  if (!id) return sendError({ res, error: 'Id required' });

  // TODO: Get patient
  const patient = undefined;
  if (!patient)
    return sendError({
      res,
      error: 'Not found',
      status: EnumHttpStatus.NotFound,
    });

  return res.status(EnumHttpStatus.Success).send({
    patient: patient,
  });
};

export const list: ListPatientHandler = async (req, res) => {
  const { error, getPagination } = getPaginate({
    req,
  });
  if (error) return sendError({ res, error });

  // TODO: List patients
  const patients: ListPatientResume[] = [];

  return res.status(EnumHttpStatus.Success).send({
    ...getPagination({ totalItems: patients.length }),
    patients,
  });
};
