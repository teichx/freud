import { GetPatientSuccess } from '~/core/api/patient/types';

import { PatientFields } from '../types';

export type UsePatientDataResultProps = {
  patient: GetPatientSuccess['patient'];
  savePatient: (patient: PatientFields) => Promise<boolean>;
};
