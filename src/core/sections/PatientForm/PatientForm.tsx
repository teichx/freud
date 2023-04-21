import { ComplainedCheck } from './ComplainedCheck';
import { ComplainedHistory } from './ComplainedHistory';
import { FirstConsult } from './FirstConsult';
import { FreeText } from './FreeText';
import { PersonalData } from './PersonalData';

export const PatientForm = () => (
  <div>
    <PersonalData />
    <FirstConsult />
    <ComplainedHistory />
    <ComplainedCheck />
    <FreeText />
  </div>
);
