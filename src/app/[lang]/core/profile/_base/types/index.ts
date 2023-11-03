import { InferType } from 'yup';

import { ReplaceNestedDates } from '~/common/types/ReplaceNestedDates';

import { createProfileSchema } from '../schema';

export type ProfileFieldsWithoutId = ReplaceNestedDates<
  InferType<ReturnType<typeof createProfileSchema>>
>;

export type ProfileFields = Omit<ProfileFieldsWithoutId, 'id'> & {
  id: string;
};
