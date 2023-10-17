import { FormComponent, FormHidden } from '~/common/components/Form';
import { schemaValidation } from '~/common/helpers';
import { patientSchema } from '~/core/modules/Patient/api/schema/schema';
import { PatientFields } from '~/core/modules/Patient/api/schema/types';

import { usePatientData } from '../../hooks';
import { ComplainedCheck } from '../ComplainedCheck';
import { ComplainedHistory } from '../ComplainedHistory';
import { FirstConsult } from '../FirstConsult';
import { FreeText } from '../FreeText';
import { PatientFormHeader } from '../PatientFormHeader';
import { PersonalData } from '../PersonalData';

export const PatientForm = () => {
  const { patient, savePatient } = usePatientData();

  return (
    <FormComponent<PatientFields>
      onSubmit={savePatient}
      initialValues={patient}
      validate={schemaValidation(patientSchema)}
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