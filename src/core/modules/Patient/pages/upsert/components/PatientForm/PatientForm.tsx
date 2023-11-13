import { useRef } from 'react';

import { FormComponent, FormHidden } from '~/common/components/Form';
import { schemaValidation } from '~/common/validation';
import { createPatientSchema } from '~/core/modules/Patient/api/schema/schema';
import { ParsedPatientFields } from '~/core/modules/Patient/api/schema/types';

import { usePatientData } from '../../hooks';
import { ComplainedCheck } from '../ComplainedCheck';
import { ComplainedHistory } from '../ComplainedHistory';
import { FirstConsult } from '../FirstConsult';
import { FreeText } from '../FreeText';
import { PatientFormHeader } from '../PatientFormHeader';
import { PersonalData } from '../PersonalData';

export const PatientForm = () => {
  const schema = useRef(createPatientSchema());
  const { patient, savePatient } = usePatientData();

  return (
    <FormComponent<ParsedPatientFields>
      onSubmit={savePatient}
      initialValues={patient}
      validate={schemaValidation(schema.current)}
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
