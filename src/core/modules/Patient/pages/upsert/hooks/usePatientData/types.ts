import { PatientFields } from '~/core/modules/Patient/api/schema/types';

import { GetPatientSuccess } from '../../../../api/get/types';

export type PatientStateProps = Pick<GetPatientSuccess, 'patient'> & {
  isLoaded: boolean;
};

export type UsePatientDataResultProps = Pick<GetPatientSuccess, 'patient'> & {
  savePatient: (patient: PatientFields) => Promise<void>;
};
