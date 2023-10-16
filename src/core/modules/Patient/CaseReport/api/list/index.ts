import { getPaginate } from '~/common/query';
import { EnumHttpStatus, sendError } from '~/core/api';
import { getCustomerId } from '~/core/modules/Customer/auth';

import { Patient } from '../../../api/model';
import { CaseReport, getCaseReportPK } from '../model';
import { ListCaseReportHandler } from './types';

export const list: ListCaseReportHandler = async (req, res) => {
  const { authError, customerId } = await getCustomerId(req, res);
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
