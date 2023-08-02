import { ulid } from 'ulid';

import { getPaginate } from '~/common/query';
import { getCustomerId } from '~/core/api/auth/authorization';
import { sendError } from '~/core/api/common';
import { EnumHttpStatus } from '~/core/api/constants';
import { CaseReport, Patient, getCaseReportPK } from '~/core/api/model';
import { CASE_REPORT_RESUME_LENGTH, caseReportSchema } from '~/core/contract';

import { ListCaseReportHandler, UpsertCaseReportHandler } from '../types';
import { GetCaseReportHandler } from '../types/get';

export const upsert: UpsertCaseReportHandler = async (req, res) => {
  const { authError, customerId } = getCustomerId(req);
  if (!customerId) return sendError({ res, error: authError });

  const PK = getCaseReportPK({
    tenantId: customerId,
    patientId: req.body.caseReport.patientId,
  });

  const receivedId = req.body.caseReport?.id;
  const SK = req.body.caseReport?.id || ulid();

  const caseReportBody = await caseReportSchema.validate(req.body.caseReport);
  const caseReport = {
    ...caseReportBody,
    reportingDate: caseReportBody.reportingDate.toISOString(),
    resume: caseReportBody.content.substring(0, CASE_REPORT_RESUME_LENGTH),
    PK,
    SK,
  };
  if (!receivedId) {
    await CaseReport.create(caseReport);

    return res.status(EnumHttpStatus.Created).send({
      id: SK,
    });
  }

  await CaseReport.update(
    {
      PK,
      SK,
    },
    caseReport
  );

  return res.status(EnumHttpStatus.Success).send({
    id: SK,
  });
};

export const list: ListCaseReportHandler = async (req, res) => {
  const { authError, customerId } = getCustomerId(req);
  if (!customerId) return sendError({ res, error: authError });

  const { error, limit, getPagination } = getPaginate({
    req,
  });
  if (error) return sendError({ res, error });

  const { patientId } = req.query;
  if (!patientId)
    return sendError({ res, error: 'patientId not found in query' });

  const PK = getCaseReportPK({ tenantId: customerId, patientId });
  const caseReportCountQuery = CaseReport.query({
    PK,
  })
    .count()
    .exec();

  const caseReportQuery = CaseReport.query({
    PK,
  })
    .attributes(['SK', 'resume', 'reportingDate'])
    .limit(limit)
    .exec();

  const patientNameQuery = Patient.query({
    PK: customerId,
    SK: patientId,
  })
    .attributes(['name'])
    .exec();

  const [caseReports, [patientName], caseReportCount] = await Promise.all([
    caseReportQuery,
    patientNameQuery,
    caseReportCountQuery,
  ]);
  if (!patientName)
    return sendError({
      res,
      error: 'patientName not found',
      status: 'NotFound',
    });

  return res.status(EnumHttpStatus.Success).send({
    ...getPagination({ totalItems: caseReportCount.count }),
    patientName: patientName.name,
    caseReports: caseReports.map((x) => ({
      id: x.SK,
      reportingDate: x.reportingDate,
      resume: x.resume,
    })),
  });
};

export const get: GetCaseReportHandler = async (req, res) => {
  const { authError, customerId } = getCustomerId(req);
  if (!customerId) return sendError({ res, error: authError });

  const { patientId, caseReportId } = req.query;
  if (!patientId)
    return sendError({ res, error: 'patientId not found in query' });

  if (!caseReportId)
    return sendError({ res, error: 'caseReportId not found in query' });

  const caseReportQuery = CaseReport.query({
    PK: getCaseReportPK({ tenantId: customerId, patientId }),
    SK: caseReportId,
  })
    .attributes(['SK', 'content', 'reportingDate'])
    .exec();

  const patientNameQuery = Patient.query({
    PK: customerId,
    SK: patientId,
  })
    .attributes(['name'])
    .exec();

  const [[caseReport], [patientName]] = await Promise.all([
    caseReportQuery,
    patientNameQuery,
  ]);
  if (!caseReport)
    return sendError({
      res,
      error: 'caseReport not found',
      status: 'NotFound',
    });
  if (!patientName)
    return sendError({
      res,
      error: 'patientName not found',
      status: 'NotFound',
    });

  return res.status(EnumHttpStatus.Success).send({
    caseReport: {
      id: caseReport.SK,
      content: caseReport.content,
      reportingDate: caseReport.reportingDate,
    },
    patientName: patientName.name,
  });
};
