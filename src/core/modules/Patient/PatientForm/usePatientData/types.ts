import { GetPatientSuccess } from '~/core/api/patient/types';
import { PatientFields } from '~/core/contract';

export type PatientStateProps = Pick<GetPatientSuccess, 'patient'> & {
  isLoaded: boolean;
};

export type UsePatientDataResultProps = Pick<GetPatientSuccess, 'patient'> & {
  savePatient: (patient: PatientFields) => Promise<void>;
};
