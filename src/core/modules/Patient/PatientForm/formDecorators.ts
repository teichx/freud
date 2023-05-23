import createDecorator from 'final-form-calculate';

import { calculateAge } from '~/core/helpers/dates';

const birth = createDecorator({
  field: 'birth',
  updates: {
    age: calculateAge,
  },
});

export const decorators = [birth];
