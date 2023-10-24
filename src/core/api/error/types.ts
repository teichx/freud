import { EnumHttpStatus } from '../constants';

export type SendErrorProps<TExtras extends object = object> = {
  error: string;
  extras?: TExtras;
  status?: keyof typeof EnumHttpStatus;
};
