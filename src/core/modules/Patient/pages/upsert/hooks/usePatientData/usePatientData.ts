import { useCallback, useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { ApiRoutes, Routes } from '~/core/constants';
import { useFormat } from '~/core/hooks';
import { patientSchema } from '~/core/modules/Patient/api/schema/schema';
import { PatientFields } from '~/core/modules/Patient/api/schema/types';
import { useAuth, useLoader } from '~/core/services';

import { GetPatientSuccess } from '../../../../api/get/types';
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
    const route = formatRoute(ApiRoutes.Patient.Get, `${patientId}`);
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
    async (patientRaw) => {
      const patient = patientSchema.validateSync(patientRaw);
      const body = JSON.stringify({ patient });
      setIsLoading(true);
      try {
        const result = await authenticateFetch(ApiRoutes.Patient.Upsert, {
          method: 'POST',
          body,
        });
        const data: PatientFields = await result.json();

        setState(INITIAL_STATE);
        replace(formatRoute(Routes.Core.Patient.Edit, data.id), undefined, {
          shallow: true,
        });
      } catch (error) {
        setIsLoading(false);
      }
    },
    [authenticateFetch, replace, formatRoute, setIsLoading]
  );

  return {
    patient,
    savePatient,
  };
};
