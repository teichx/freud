import { PatientFields } from '~/core/contract';

import { ErrorMessage, RequestQueryHandler } from '../../common';

export type GetPatientSuccess = {
  patient: PatientFields | undefined;
};

export type GetPatientResponse = GetPatientSuccess | ErrorMessage;

export type GetPatientQueryProps = { patientId: string };

export type GetPatientHandler = RequestQueryHandler<
  GetPatientQueryProps,
  GetPatientResponse
>;
