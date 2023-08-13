import { PatientForm } from '~/core/modules/Patient/PatientForm';
import { AppPage } from '~/core/template/AppPage';

export const CreatePatient = () => (
  <AppPage titleKey='patient.create'>
    <PatientForm />
  </AppPage>
);

export default CreatePatient;
