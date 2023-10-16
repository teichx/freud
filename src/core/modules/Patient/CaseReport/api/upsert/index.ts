import { parseISO } from 'date-fns';
import { ulid } from 'ulid';

import { EnumHttpStatus, sendError } from '~/core/api';
import { getCustomerId } from '~/core/modules/Customer/auth';

import { Patient } from '../../../api/model';
import { CaseReport, getCaseReportPK } from '../model';
import { CASE_REPORT_RESUME_LENGTH, caseReportSchema } from '../schema';
import { UpsertCaseReportHandler } from './upsert';

export const upsert: UpsertCaseReportHandler = async (req, res) => {
  const { authError, customerId } = await getCustomerId(req, res);
  if (!customerId) return sendError({ res, error: authError });

  const PK = getCaseReportPK({
    tenantId: customerId,
    patientId: req.body.caseReport.patientId,
  });
  const patientKeys = {
    PK: customerId,
    SK: req.body.caseReport.patientId,
  };

  const receivedId = req.body.caseReport?.id;
  const SK = req.body.caseReport?.id || ulid();
  const keys = {
    PK,
    SK,
  } as const;

  const caseReportBody = await caseReportSchema.validate(req.body.caseReport);
  const caseReport = {
    ...caseReportBody,
    reportingDate: caseReportBody.reportingDate.toISOString(),
    resume: caseReportBody.content.substring(0, CASE_REPORT_RESUME_LENGTH),
  };

  const reportingDates = await CaseReport.query({
    PK,
  })
    .attributes(['SK', 'reportingDate'])
    .exec();

  const allReportingDates = [
    { SK, reportingDate: caseReport.reportingDate },
    ...reportingDates.map((x) => ({
      SK: x.SK,
      reportingDate: x.reportingDate,
    })),
  ]
    .filter((x, index, list) => list.findIndex((y) => y.SK == x.SK) === index)
    .map((x) => parseISO(x.reportingDate).getTime());

  const mostRecentReportingDate = new Date(Math.max(...allReportingDates));
  const patientCalculated = {
    calculated: {
      caseReportCount: allReportingDates.length,
      lastCaseReport: mostRecentReportingDate.toISOString(),
    },
  };

  if (!receivedId) {
    await CaseReport.create({
      ...keys,
      ...caseReport,
    });
    await Patient.update(patientKeys, patientCalculated);

    return res.status(EnumHttpStatus.Created).send({
      id: SK,
    });
  }

  await CaseReport.update(keys, caseReport);
  await Patient.update(patientKeys, patientCalculated);

  return res.status(EnumHttpStatus.Success).send({
    id: SK,
  });
};
