import { useCallback } from 'react';

import { ApiRoutes } from '~/core/constants';
import { useFormat } from '~/core/hooks';
import { useAuth, useSoftRefresh } from '~/core/services';

import { UseHandleArchive } from './types';

export const useHandleArchive: UseHandleArchive = () => {
  const { authenticateFetch } = useAuth();
  const { refreshId } = useSoftRefresh();
  const { formatRoute } = useFormat();

  const archivePatient = useCallback<
    ReturnType<UseHandleArchive>['archivePatient']
  >(
    ({ patientId }) => {
      authenticateFetch(formatRoute(ApiRoutes.Patient.Archive, patientId), {
        method: 'POST',
      }).then(() => refreshId());
    },
    [authenticateFetch, formatRoute, refreshId]
  );

  const unarchivePatient = useCallback<
    ReturnType<UseHandleArchive>['unarchivePatient']
  >(
    ({ patientId }) => {
      authenticateFetch(formatRoute(ApiRoutes.Patient.Unarchive, patientId), {
        method: 'POST',
      }).then(() => refreshId());
    },
    [authenticateFetch, formatRoute, refreshId]
  );

  return {
    archivePatient,
    unarchivePatient,
  };
};
