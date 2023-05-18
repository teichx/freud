import { useCallback, useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { GetPatientSuccess } from '~/core/api/patient/types';
import { ApiRoutes } from '~/core/constants';
import { useFormat } from '~/core/hooks';
import { useAuth, useLoader } from '~/core/services';

import { PatientFields } from '../types';
import { UsePatientDataResultProps } from './types';

export const usePatientData = (): UsePatientDataResultProps => {
  const {
    query: { id: patientId },
  } = useRouter();
  const [patient, setPatient] = useState<PatientFields | undefined>();
  const { setIsLoading } = useLoader();
  const { authenticateFetch } = useAuth();
  const { formatRoute } = useFormat();

  useEffect(() => {
    if (!patientId) return;
    if (patient) return;

    const route = formatRoute(ApiRoutes.Patient.Google.Get, `${patientId}`);
    setIsLoading(true);
    authenticateFetch(route)
      .then<GetPatientSuccess>((x) => x.json())
      .then((x) => setPatient(x.patient))
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, [patientId, patient, authenticateFetch, formatRoute, setIsLoading]);

  const savePatient = useCallback<UsePatientDataResultProps['savePatient']>(
    async (patient) => {
      const result = await authenticateFetch(ApiRoutes.Patient.Google.Upsert, {
        method: 'POST',
        body: JSON.stringify(patient),
      });
      const data = await result.json();
      return data;
    },
    [authenticateFetch]
  );

  return {
    patient,
    savePatient,
  };
};
