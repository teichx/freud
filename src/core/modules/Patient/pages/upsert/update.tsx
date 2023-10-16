import { PatientForm } from '~/core/modules/Patient/pages/upsert/components/PatientForm';
import { AppPage } from '~/core/template/AppPage';

export const UpdatePatient = () => (
  <AppPage titleKey='patient.details'>
    <PatientForm />
  </AppPage>
);
