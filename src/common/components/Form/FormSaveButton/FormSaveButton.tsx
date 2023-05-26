import { FC } from 'react';

import { useFormState } from 'react-final-form';

import { SaveButton } from '../../Buttons';
import { FromSaveButtonProps } from './types';

export const FormSaveButton: FC<FromSaveButtonProps> = (props) => {
  const { pristine } = useFormState();

  return <SaveButton isDisabled={pristine} {...props} />;
};
