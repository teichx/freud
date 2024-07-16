import { useEffect, useState } from 'react';

import { useParams } from 'next/navigation';

import { GetPatientSuccess } from '~/app/api/patient/v2/[patientId]/(getById)/types';
import { useAuth, useLoader } from '~/core/services';

const INITIAL_STATE: {
  patient: GetPatientSuccess['patient'];
  isLoaded: boolean;
} = {
  patient: undefined,
  isLoaded: false,
};

export const useGetPatient = () => {
  const { patientId } = useParams<{ patientId: string }>() || { patientId: '' };

  const [{ patient, isLoaded }, setState] = useState(INITIAL_STATE);
  const { isLoading, setIsLoading } = useLoader('DEFAULT');
  const { authenticateFetch } = useAuth();

  useEffect(() => {
    if (!patientId) return;
    if (isLoaded) return;
    if (isLoading) return;

    setIsLoading(true);
    authenticateFetch(`/api/patient/v2/${patientId}`)
      .then<GetPatientSuccess>((x) => x.json())
      .then(({ patient }) => setState((x) => ({ ...x, patient })))
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
        setState((x) => ({ ...x, isLoaded: true }));
      });
  }, [patientId, isLoaded, isLoading, authenticateFetch, setIsLoading]);

  return {
    patient,
  };
};
