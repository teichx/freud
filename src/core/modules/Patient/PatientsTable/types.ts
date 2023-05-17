import { ListPatientResume } from '~/core/api/patient/types';

export type PatientTableStateProps = {
  isLoading: boolean;
  totalItems: number;
  data: ListPatientResume[];
};
