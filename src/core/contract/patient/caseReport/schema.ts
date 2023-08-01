import { endOfDay } from 'date-fns';
import * as yup from 'yup';

export const caseReportSchema = yup.object().shape({
  id: yup.string(),
  patientId: yup.string().required(),
  content: yup.string().required(),
  reportingDate: yup
    .date()
    .min('1950-01-01')
    .max(endOfDay(new Date()).toISOString().split('T')[0]),
  createdAt: yup.date().withMutation(() => yup.string()),
  updatedAt: yup.date().withMutation(() => yup.string()),
});
