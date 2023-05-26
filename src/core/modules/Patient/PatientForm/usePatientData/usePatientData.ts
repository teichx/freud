import { useCallback, useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { GetPatientSuccess } from '~/core/api/patient/types';
import { ApiRoutes } from '~/core/constants';
import { useFormat } from '~/core/hooks';
import { useAuth, useLoader } from '~/core/services';

import { PatientStateProps, UsePatientDataResultProps } from './types';

const INITIAL_STATE = {
  patient: undefined,
  isLoaded: false,
};

export const usePatientData = (): UsePatientDataResultProps => {
  const {
    query: { id: patientId },
  } = useRouter();

  const [{ patient, isLoaded }, setPatient] =
    useState<PatientStateProps>(INITIAL_STATE);
  const { setIsLoading } = useLoader();
  const { authenticateFetch } = useAuth();
  const { formatRoute } = useFormat();

  useEffect(() => {
    if (!patientId) return;
    if (isLoaded) return;

    setIsLoading(true);
    const route = formatRoute(ApiRoutes.Patient.Google.Get, `${patientId}`);
    authenticateFetch(route)
      .then<GetPatientSuccess>((x) => x.json())
      .then(({ patient }) => setPatient((x) => ({ ...x, patient })))
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
        setPatient((x) => ({ ...x, isLoaded: true }));
      });
  }, [patientId, isLoaded, authenticateFetch, formatRoute, setIsLoading]);

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
