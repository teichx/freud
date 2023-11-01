import { NextResponse } from 'next/server';

import { getFilter, getPaginate } from '~/common/query';
import { sendError } from '~/core/api';
import { dynamoPaginator } from '~/core/api/infra/dynamoPaginator';
import { getCustomerId } from '~/core/modules/Customer/auth';

import { Patient } from '../model';
import { parseSearchTerm } from '../parseSearchTerm';
import { ListPatientHandler, EnumListPatientStatus } from './types';

export const list: ListPatientHandler = async (req) => {
  const { authError, customerId } = await getCustomerId();
  if (!customerId) return sendError({ error: authError });

  const { error, offset, limit, getPagination } = getPaginate({
    req,
  });
  if (error) return sendError({ error });

  const {
    filter: { patientName, status },
  } = getFilter({ req });

  const statusArray = Array.isArray(status) ? status : [status].filter(Boolean);
  if (!statusArray.length) return sendError({ error: 'status is required' });

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

  const patientsQuery = getQueryWithFilters().attributes([
    'SK',
    'name',
    'archivedAt',
    'calculated',
  ]);

  const patientsCountQuery = getQueryWithFilters().count().exec();

  const [patients, patientsCount] = await Promise.all([
    dynamoPaginator({
      offset,
      limit,
      query: patientsQuery,
    }),
    patientsCountQuery,
  ]);

  return NextResponse.json({
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
