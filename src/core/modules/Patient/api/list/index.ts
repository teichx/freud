import { getFilter, getPaginate } from '~/common/query';
import { sendError } from '~/core/api';
import { getCustomerId } from '~/core/modules/Customer/auth';

import { EnumHttpStatus } from '../../../../api/constants';
import { Patient } from '../model';
import { parseSearchTerm } from '../parseSearchTerm';
import { ListPatientHandler, EnumListPatientStatus } from './types';

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
  if (!statusArray.length)
    return sendError({ res, error: 'status is required' });

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
