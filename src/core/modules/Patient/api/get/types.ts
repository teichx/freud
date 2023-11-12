import { ErrorMessage, RequestQueryHandler } from '~/core/api';

import { ParsedPatientFields } from '../schema/types';

export type GetPatientSuccess = {
  patient: ParsedPatientFields | undefined;
};

export type GetPatientResponse = GetPatientSuccess | ErrorMessage;

export type GetPatientQueryProps = { patientId: string };

export type GetPatientHandler = RequestQueryHandler<
  GetPatientQueryProps,
  GetPatientResponse
>;
