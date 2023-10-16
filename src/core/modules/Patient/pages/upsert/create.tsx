import { PatientForm } from '~/core/modules/Patient/pages/upsert/components/PatientForm';
import { AppPage } from '~/core/template/AppPage';

export const CreatePatient = () => (
  <AppPage titleKey='patient.create'>
    <PatientForm />
  </AppPage>
);
