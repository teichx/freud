import { Routes } from '~/core/constants';

export const MENU_ITEMS = [
  {
    path: Routes.Core.Dashboard.Default,
    labelKey: 'dashboard',
    isEnabled: false,
  },
  {
    path: Routes.Core.Patient.List,
    labelKey: 'patient',
    isEnabled: true,
  },
] as const;
