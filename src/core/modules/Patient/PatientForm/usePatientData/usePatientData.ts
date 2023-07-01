import { useCallback, useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { GetPatientSuccess } from '~/core/api/patient/types';
import { ApiRoutes, Routes } from '~/core/constants';
import { useFormat } from '~/core/hooks';
import { useAuth, useLoader } from '~/core/services';

import { PatientFields } from '../types';
import { PatientStateProps, UsePatientDataResultProps } from './types';

const INITIAL_STATE = {
  patient: undefined,
  isLoaded: false,
};

export const usePatientData = (): UsePatientDataResultProps => {
  const {
    query: { patientId },
    replace,
  } = useRouter();

  const [{ patient, isLoaded }, setState] =
    useState<PatientStateProps>(INITIAL_STATE);
  const { setIsLoading } = useLoader('DEFAULT');
  const { authenticateFetch } = useAuth();
  const { formatRoute } = useFormat();

  useEffect(() => {
    if (!patientId) return;
    if (isLoaded) return;

    setIsLoading(true);
    const route = formatRoute(ApiRoutes.Patient.Google.Get, `${patientId}`);
    authenticateFetch(route)
      .then<GetPatientSuccess>((x) => x.json())
      .then(({ patient }) => setState((x) => ({ ...x, patient })))
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
        setState((x) => ({ ...x, isLoaded: true }));
      });
  }, [patientId, isLoaded, authenticateFetch, formatRoute, setIsLoading]);

  const savePatient = useCallback<UsePatientDataResultProps['savePatient']>(
    async (patient) => {
      setIsLoading(true);
      const result = await authenticateFetch(ApiRoutes.Patient.Google.Upsert, {
        method: 'POST',
        body: JSON.stringify(patient),
      });
      const data: PatientFields = await result.json();

      setState(INITIAL_STATE);
      setIsLoading(false);
      replace(formatRoute(Routes.Core.Patient.Edit, data.id), undefined, {
        shallow: true,
      });
    },
    [authenticateFetch, replace, formatRoute, setIsLoading]
  );

  return {
    patient,
    savePatient,
  };
};
