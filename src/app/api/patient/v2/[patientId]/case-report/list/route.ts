import { NextResponse } from 'next/server';

import { sendError } from '~/core/api';
import { getCustomerId } from '~/core/modules/Customer/auth';
import {
  CASE_REPORT_PREFIX,
  CaseReport,
  getCaseReportPK,
} from '~/core/modules/Patient/CaseReport/api/model';

import { ListCaseReportHandler } from './types';

export const GET: ListCaseReportHandler = async (req, ctx) => {
  const { authError, customerId } = await getCustomerId();
  if (!customerId) return sendError({ error: authError });

  const url = new URL(req.url);
  const searchParams = url.searchParams;
  const limit = Number(searchParams.get('limit')) || 10;
  const lastId = searchParams.get('lastId');
  const { patientId } = ctx.params;
  if (!patientId) return sendError({ error: 'patientId not found in query' });
  if (!Number.isInteger(limit))
    return sendError({ error: 'limit should be integer' });

  const PK = getCaseReportPK({ tenantId: customerId, patientId });

  const queryLimit = limit + 1;
  const caseReportsQuery = CaseReport.query({ PK });
  const caseReports = await (lastId && lastId !== 'undefined'
    ? caseReportsQuery.startAt({
        PK,
        SK: `${CASE_REPORT_PREFIX.SK}${lastId}`,
      })
    : caseReportsQuery
  )
    .limit(queryLimit)
    .attributes(['SK', 'content', 'reportingDate'])
    .sort('descending')
    .exec();

  const hasNextPage = caseReports.length === queryLimit;
  const items = hasNextPage ? caseReports.slice(0, -1) : caseReports;

  return NextResponse.json({
    items: items.map((x) => ({
      id: x.SK,
      content: x.content,
      reportingDate: x.reportingDate,
    })),
    hasNextPage,
  });
};
