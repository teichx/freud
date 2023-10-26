import { FC } from 'react';

import { useFormState } from 'react-final-form';

import { useScopedI18n } from '~/i18n/client';

import { SaveButton } from '../../Buttons';
import { TooltipComponent } from '../../TooltipComponent';
import { FromSaveButtonProps } from './types';

export const FormSaveButton: FC<FromSaveButtonProps> = (props) => {
  const t = useScopedI18n('translations.form');

  const { pristine, hasValidationErrors } = useFormState();

  const options = [
    [pristine, 'disabledByPristine'],
    [hasValidationErrors, 'disabledByHasValidationErrors'],
  ] as const;
  const [, translateKey] = options.find(([condition]) =>
    Boolean(condition)
  ) || [false, undefined];

  return (
    <TooltipComponent label={translateKey ? t(translateKey) : undefined}>
      <SaveButton isDisabled={pristine || hasValidationErrors} {...props} />
    </TooltipComponent>
  );
};
