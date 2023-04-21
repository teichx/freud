import { Form } from '@unform/web';

import { ComplainedCheck } from './ComplainedCheck';
import { ComplainedHistory } from './ComplainedHistory';
import { FirstConsult } from './FirstConsult';
import { FreeText } from './FreeText';
import { PersonalData } from './PersonalData';

export const PatientForm = () => {
  const handleSubmit = (data: unknown) => {
    console.log(data);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      initialData={{
        name: 'foo',
        cpf: '12233344422',
      }}
    >
      <button type='submit'>enviar</button>
      <PersonalData />
      <FirstConsult />
      <ComplainedHistory />
      <ComplainedCheck />
      <FreeText />
    </Form>
  );
};
