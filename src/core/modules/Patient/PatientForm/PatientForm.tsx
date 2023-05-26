import { FormComponent, FormHidden } from '~/common/components/Form';

import { ComplainedCheck } from './ComplainedCheck';
import { ComplainedHistory } from './ComplainedHistory';
import { FirstConsult } from './FirstConsult';
import { FreeText } from './FreeText';
import { PatientFormHeader } from './PatientFormHeader';
import { PersonalData } from './PersonalData';
import { PatientFields } from './types';
import { usePatientData } from './usePatientData';

export const PatientForm = () => {
  const { patient, savePatient } = usePatientData();

  return (
    <FormComponent<PatientFields>
      onSubmit={savePatient}
      initialValues={patient}
    >
      <FormHidden name='id' />

      <PatientFormHeader />

      <PersonalData />
      <FirstConsult />
      <ComplainedHistory />
      <ComplainedCheck />
      <FreeText />
    </FormComponent>
  );
};
