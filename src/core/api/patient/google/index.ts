import { ulid } from 'ulid';

import { PatientFields } from '~/core/sections/PatientForm/types';

import { getPaginate, sendError } from '../../common';
import { EnumHttpStatus } from '../../constants';
import {
  UpsertPatientHandler,
  GetPatientHandler,
  ListPatientHandler,
} from '../types';

export const upsert: UpsertPatientHandler = async (req, res) => {
  // TODO: Upsert patient
  const id = ulid();

  return res.status(EnumHttpStatus.Success).send({
    id,
  });
};

export const get: GetPatientHandler = async (req, res) => {
  const { id } = req.query;
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
  const { page, limit, error } = getPaginate({
    req,
    maxPaginate: 30,
  });
  if (error) return sendError({ res, error });

  // TODO: List patients
  const patients: PatientFields[] = [];

  return res.status(EnumHttpStatus.Success).send({
    page,
    limit,
    patients,
  });
};
