import slugify from 'slugify';
import { ulid } from 'ulid';

import { getFilter, getPaginate } from '~/common/query';
import { patientSchema } from '~/core/contract/patient/schema';

import { getCustomerId } from '../../auth/authorization';
import { sendError } from '../../common';
import { EnumHttpStatus } from '../../constants';
import { Patient } from '../../model';
import {
  UpsertPatientHandler,
  GetPatientHandler,
  ListPatientHandler,
  EnumListPatientStatus,
} from '../types';
import { ArchiveOrUnarchivePatientHandler } from '../types/archive';

export const parseSearchTerm = (values: string[]) =>
  values
    .map((x) =>
      slugify(x, {
        replacement: '-',
        lower: true,
        trim: true,
      })
    )
    .join('_');

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

export const list: ListPatientHandler = async (req, res) => {
  const { authError, customerId } = await getCustomerId(req, res);
  if (!customerId) return sendError({ res, error: authError });

  const { error, limit, getPagination } = getPaginate({
    req,
  });
  if (error) return sendError({ res, error });

  const {
    filter: { patientName, status },
  } = getFilter({ req });

  const statusArray = Array.isArray(status) ? status : [status].filter(Boolean);

  const getQueryWithFilters = () => {
    const query = Patient.query({
      PK: { eq: customerId },
    });
    if (patientName) {
      query.where('searchTerm').contains(parseSearchTerm([patientName]));
    }
    const filterArchived = statusArray.includes(EnumListPatientStatus.Archived);
    const filterUnarchive = statusArray.includes(
      EnumListPatientStatus.Unarchive
    );
    if (filterArchived && !filterUnarchive) {
      query.where('archivedAt').exists();
    }
    if (!filterArchived && filterUnarchive) {
      query.where('archivedAt').not().exists();
    }

    return query;
  };

  const patientsQuery = getQueryWithFilters()
    .attributes(['SK', 'name', 'archivedAt', 'calculated'])
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
      archivedAt: x.archivedAt,
      lastCaseReport: x.calculated?.lastCaseReport
        ? new Date(x.calculated.lastCaseReport).toISOString().split('T')[0]
        : undefined,
      caseReportCount: x.calculated?.caseReportCount || 0,
    })),
  });
};

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
