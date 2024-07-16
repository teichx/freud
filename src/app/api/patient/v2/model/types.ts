import { PatientFields } from '../schema/types';

export type PatientModelProps = PatientFields & {
  personal: PatientFields['personal'] &
    Partial<
      Pick<PatientFields['contact'], 'address' | 'emergency' | 'phoneNumber'>
    >;
};
