import { PatientForm } from '~/core/modules/Patient/PatientForm';
import { AppPage } from '~/core/template/AppPage';

export const EditProfile = () => (
  <AppPage titleKey='patient.details'>
    <PatientForm />
  </AppPage>
);

export default EditProfile;
