import { NextResponse } from 'next/server';

import { getPaginate } from '~/common/query';
import { sendError } from '~/core/api';
import { getCustomerId } from '~/core/modules/Customer/auth';

import { Patient } from '../../../api/model';
import { CaseReport, getCaseReportPK } from '../model';
import { ListCaseReportHandler } from './types';

export const list: ListCaseReportHandler = async (req, ctx) => {
  const { authError, customerId } = await getCustomerId();
  if (!customerId) return sendError({ error: authError });

  const { error, limit, getPagination } = getPaginate({
    req,
  });
  if (error) return sendError({ error });

  const { patientId } = ctx.params;
  if (!patientId) return sendError({ error: 'patientId not found in query' });

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
    return sendError({ error: 'patientName not found', status: 'NotFound' });

  return NextResponse.json({
    ...getPagination({ totalItems: caseReportCount.count }),
    patientName: patientName.name,
    caseReports: caseReports.map((x) => ({
      id: x.SK,
      reportingDate: x.reportingDate,
      resume: x.resume,
    })),
  });
};
