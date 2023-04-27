import { Routes } from '~/core/constants';

export const getRedirectUri = (baseUrl: string) =>
  `${baseUrl}${Routes.Core.Authenticated}`;
