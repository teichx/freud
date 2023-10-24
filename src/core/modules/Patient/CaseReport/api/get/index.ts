import { NextResponse } from 'next/server';

import { sendError } from '~/core/api';
import { getCustomerId } from '~/core/modules/Customer/auth';

import { Patient } from '../../../api/model';
import { CaseReport, getCaseReportPK } from '../model';
import { GetCaseReportHandler } from './types';

export const get: GetCaseReportHandler = async (req, ctx) => {
  const { authError, customerId } = await getCustomerId();
  if (!customerId) return sendError({ error: authError });

  const { patientId, caseReportId } = ctx.params;
  if (!patientId) return sendError({ error: 'patientId not found in query' });

  if (!caseReportId)
    return sendError({ error: 'caseReportId not found in query' });

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
    return sendError({ error: 'caseReport not found', status: 'NotFound' });
  if (!patientName)
    return sendError({ error: 'patientName not found', status: 'NotFound' });

  return NextResponse.json({
    caseReport: {
      id: caseReport.SK,
      content: caseReport.content,
      reportingDate: caseReport.reportingDate,
    },
    patientName: patientName.name,
  });
};
