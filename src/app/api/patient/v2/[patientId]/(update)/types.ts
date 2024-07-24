import { ErrorMessage, RequestQueryBodyHandler } from '~/core/api';

import { ParsedPatientFields } from '../../schema/types';

export type UpdatePatientSuccess = {
  updatedAt: string;
};

export type UpdatePatientResponse = UpdatePatientSuccess | ErrorMessage;

export type UpdatePatientQueryProps = { patientId: string };

export type UpdatePatientBodyProps = Partial<ParsedPatientFields>;

export type UpdatePatientHandler = RequestQueryBodyHandler<
  UpdatePatientQueryProps,
  UpdatePatientBodyProps,
  UpdatePatientResponse
>;
