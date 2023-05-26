import { Decorator } from 'final-form';
import createDecorator from 'final-form-calculate';

import { calculateAge } from '~/core/helpers/dates';

import { PatientFields } from './types';

const birth = createDecorator({
  field: 'birth',
  updates: {
    age: calculateAge,
  },
}) as Decorator<PatientFields>;

export const decorators = [birth];
