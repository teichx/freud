import { NextResponse } from 'next/server';

import { getFilter, getLimit } from '~/common/query';
import { sendError } from '~/core/api';
import { getCustomerId } from '~/core/modules/Customer/auth';
import { PATIENT_PREFIX, Patient } from '~/core/modules/Patient/api/model';
import { parseSearchTerm } from '~/core/modules/Patient/api/parseSearchTerm';

import { ListPatientHandler, EnumListPatientStatus } from './types';

const EMPTY = {
  items: [],
  hasNextPage: false,
};

export const GET: ListPatientHandler = async (req) => {
  const { authError, customerId } = await getCustomerId();
  if (!customerId) return sendError({ error: authError });

  const { limit } = getLimit({
    req,
    defaultLimit: 20,
  });

  const {
    filter: { patientName, status },
  } = getFilter({ req });

  const statusArray = Array.isArray(status) ? status : [status].filter(Boolean);
  if (!statusArray.length) return NextResponse.json(EMPTY);

  const getQueryWithFilters = () => {
    const PK = `${PATIENT_PREFIX.PK}${customerId}`;
    const query = Patient.query({
      PK,
    });
    if (patientName) {
      query.where('searchTerm').contains(parseSearchTerm([patientName]));
    }
    const filterArchived = statusArray.includes(EnumListPatientStatus.Archived);
    const filterActive = statusArray.includes(EnumListPatientStatus.Active);
    if (filterArchived && !filterActive) {
      query.where('archivedAt').exists();
    }
    if (!filterArchived && filterActive) {
      query.where('archivedAt').not().exists();
    }
    const lastId = req.nextUrl.searchParams.get('lastId');
    if (lastId) {
      query.startAt({
        PK,
        SK: `${PATIENT_PREFIX.SK}${lastId}`,
      });
    }

    return query;
  };

  const queryLimit = limit + 1;
  const patients = await getQueryWithFilters()
    .attributes(['SK', 'name', 'archivedAt', 'calculated'])
    .limit(queryLimit)
    .exec();

  const hasNextPage = patients.length === queryLimit;
  if (hasNextPage) {
    patients.pop();
  }

  return NextResponse.json({
    items: patients.map((x) => ({
      id: x.id,
      name: x.name,
      archivedAt: x.archivedAt,
      lastCaseReport: x.calculated?.lastCaseReport
        ? new Date(x.calculated.lastCaseReport).toISOString().split('T')[0]
        : undefined,
      caseReportCount: x.calculated?.caseReportCount || 0,
    })),
    hasNextPage,
  });
};
