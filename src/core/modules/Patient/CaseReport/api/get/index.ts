import { EnumHttpStatus, sendError } from '~/core/api';
import { getCustomerId } from '~/core/modules/Customer/auth';

import { Patient } from '../../../api/model';
import { CaseReport, getCaseReportPK } from '../model';
import { GetCaseReportHandler } from './types';

export const get: GetCaseReportHandler = async (req, res) => {
  const { authError, customerId } = await getCustomerId(req, res);
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
