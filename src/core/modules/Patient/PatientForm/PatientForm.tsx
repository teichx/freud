import { Form } from '@unform/web';

import { useLoader } from '~/core/services';

import { ComplainedCheck } from './ComplainedCheck';
import { ComplainedHistory } from './ComplainedHistory';
import { FirstConsult } from './FirstConsult';
import { FreeText } from './FreeText';
import { PatientFormHeader } from './PatientFormHeader';
import { PersonalData } from './PersonalData';

export const PatientForm = () => {
  const { setIsLoading } = useLoader();
  const handleSubmit = (data: unknown) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
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
      <PatientFormHeader />

      <PersonalData />
      <FirstConsult />
      <ComplainedHistory />
      <ComplainedCheck />
      <FreeText />
    </Form>
  );
};
