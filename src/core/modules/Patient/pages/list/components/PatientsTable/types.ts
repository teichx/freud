import { ListPatientResume } from '../../../../api/list/types';

export type PatientTableStateProps = {
  isLoading: boolean;
  totalItems: number;
  data: ListPatientResume[];
};
