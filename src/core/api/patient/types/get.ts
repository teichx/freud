import { PatientFields } from '~/core/sections/PatientForm/types';

import {
  ErrorMessage,
  ReqCustomQueryProps,
  RequestHandler,
} from '../../common';

export type GetPatientSuccess = {
  patient: PatientFields | undefined | null;
};

export type GetPatientResponse = GetPatientSuccess | ErrorMessage;

export type GetPatientProps = {
  id: string;
};

export type GetPatientQueryProps = { id?: string };

export type GetPatientReqProps = ReqCustomQueryProps<GetPatientQueryProps>;

export type GetPatientHandler = RequestHandler<
  GetPatientQueryProps,
  GetPatientResponse
>;
