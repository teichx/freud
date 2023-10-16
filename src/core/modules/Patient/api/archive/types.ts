import { ErrorMessage, RequestQueryHandler } from '~/core/api';

export type ArchiveOrUnarchivePatientSuccess = object;

export type ArchiveOrUnarchivePatientResponse =
  | ArchiveOrUnarchivePatientSuccess
  | ErrorMessage;

export type ArchiveOrUnarchivePatientQueryProps = { patientId: string };

export type ArchiveOrUnarchivePatientHandler = RequestQueryHandler<
  ArchiveOrUnarchivePatientQueryProps,
  ArchiveOrUnarchivePatientResponse
>;
