import { ErrorMessage, RequestQueryHandler } from '~/core/api';

import { PatientFields } from '../schema/types';

export type GetPatientSuccess = {
  patient: PatientFields | undefined;
};

export type GetPatientResponse = GetPatientSuccess | ErrorMessage;

export type GetPatientQueryProps = { patientId: string };

export type GetPatientHandler = RequestQueryHandler<
  GetPatientQueryProps,
  GetPatientResponse
>;
