import { FC } from 'react';

import { useFormState } from 'react-final-form';
import { useTranslation } from 'react-i18next';

import { SaveButton } from '../../Buttons';
import { TooltipComponent } from '../../TooltipComponent';
import { FromSaveButtonProps } from './types';

export const FormSaveButton: FC<FromSaveButtonProps> = (props) => {
  const { t } = useTranslation(undefined, {
    keyPrefix: 'form',
  });
  const { pristine, hasValidationErrors } = useFormState();

  const options: [boolean, string][] = [
    [pristine, 'disabledByPristine'],
    [hasValidationErrors, 'disabledByHasValidationErrors'],
  ];
  const [, translateKey] = options.find(([condition]) =>
    Boolean(condition)
  ) || [false, undefined];

  return (
    <TooltipComponent label={translateKey ? t(translateKey) : undefined}>
      <SaveButton isDisabled={pristine || hasValidationErrors} {...props} />
    </TooltipComponent>
  );
};
