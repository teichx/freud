import { Form } from '@unform/web';

import { ComplainedCheck } from './ComplainedCheck';
import { ComplainedHistory } from './ComplainedHistory';
import { FirstConsult } from './FirstConsult';
import { FreeText } from './FreeText';
import { PatientFormHeader } from './PatientFormHeader';
import { PersonalData } from './PersonalData';
import { usePatientData } from './usePatientData';

export const PatientForm = () => {
  const { patient, savePatient } = usePatientData();

  return (
    <Form onSubmit={savePatient} initialData={patient}>
      <PatientFormHeader />

      <PersonalData />
      <FirstConsult />
      <ComplainedHistory />
      <ComplainedCheck />
      <FreeText />
    </Form>
  );
};
