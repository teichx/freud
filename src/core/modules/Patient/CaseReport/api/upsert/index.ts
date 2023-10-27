import { parseISO } from 'date-fns';
import { NextResponse } from 'next/server';
import { ulid } from 'ulid';

import { EnumHttpStatus, sendError } from '~/core/api';
import { getCustomerId } from '~/core/modules/Customer/auth';

import { Patient } from '../../../api/model';
import { CaseReport, getCaseReportPK } from '../model';
import { CASE_REPORT_RESUME_LENGTH, caseReportSchema } from '../schema';
import { UpsertCaseReportHandler } from './upsert';

export const upsert: UpsertCaseReportHandler = async (req) => {
  const { authError, customerId } = await getCustomerId();
  if (!customerId) return sendError({ error: authError });

  const body = await req.json();

  const PK = getCaseReportPK({
    tenantId: customerId,
    patientId: body.caseReport.patientId,
  });
  const patientKeys = {
    PK: customerId,
    SK: body.caseReport.patientId,
  };

  const receivedId = body.caseReport?.id;
  const SK = body.caseReport?.id || ulid();
  const keys = {
    PK,
    SK,
  } as const;

  const caseReportBody = await caseReportSchema.validate(body.caseReport);
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

    return NextResponse.json({ id: SK }, { status: EnumHttpStatus.Created });
  }

  await CaseReport.update(keys, caseReport);
  await Patient.update(patientKeys, patientCalculated);

  return NextResponse.json({ id: SK });
};
