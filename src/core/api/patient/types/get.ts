import { PatientFields } from '~/core/modules/Patient/PatientForm/types';

import { ErrorMessage, RequestQueryHandler } from '../../common';

export type GetPatientSuccess = {
  patient: PatientFields | undefined;
};

export type GetPatientResponse = GetPatientSuccess | ErrorMessage;

export type GetPatientQueryProps = { id: string };

export type GetPatientHandler = RequestQueryHandler<
  GetPatientQueryProps,
  GetPatientResponse
>;
