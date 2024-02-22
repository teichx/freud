import { ListPatientResume } from '~/core/modules/Patient/api/list/types';

export type PatientTableStateProps = {
  isLoading: boolean;
  totalItems: number;
  data: ListPatientResume[];
};
