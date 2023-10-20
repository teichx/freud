import { redirect } from 'next/navigation';

import { Routes } from '~/core/constants';

export default function App() {
  redirect(Routes.Core.Patient.List);
}
