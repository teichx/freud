import { useEffect, useRef, useState } from 'react';

import { useDefaultQuery, useQueryFilterByName } from '~/common/query';
import { ApiRoutes } from '~/core/constants';
import { useFormat } from '~/core/hooks';
import { createListPatientsSchema } from '~/core/modules/Patient/api/list/listPatientsSchema';
import { ListPatientSuccess } from '~/core/modules/Patient/api/list/types';
import { useAuth } from '~/core/services';

import { PatientTableStateProps } from './types';

const INITIAL_STATE: PatientTableStateProps = {
  isLoading: false,
  data: [],
  totalItems: 0,
};

export const usePatientTable = () => {
  const schema = useRef(createListPatientsSchema());
  const { format } = useFormat();
  const [state, setState] = useState(INITIAL_STATE);
  const { queryFilter } = useQueryFilterByName('patientName');
  const { stringParameters, getStateByString } = useDefaultQuery();
  const { authenticateFetch } = useAuth();

  useEffect(() => {
    setState((x) => ({ ...x, isLoading: true }));
    const state = getStateByString(stringParameters);
    if (!schema.current.isValidSync(state)) return;

    authenticateFetch(format(ApiRoutes.Patient.List, stringParameters))
      .then<ListPatientSuccess>((x) => x.json())
      .then((result) => {
        setState((x) => ({
          ...x,
          data: result.patients,
          isLoading: false,
          totalItems: result.totalItems,
        }));
      })
      .catch(() => setState(INITIAL_STATE));
  }, [authenticateFetch, format, stringParameters, getStateByString]);

  return { ...state, patientNameQueryFilter: queryFilter };
};

export * from './types';
