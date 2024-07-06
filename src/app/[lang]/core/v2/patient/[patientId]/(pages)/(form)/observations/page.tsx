'use client';
import { FormText } from '~/common/components/Form';
import { useScopedI18n } from '~/i18n/client';

import { PageDescription } from '../../../_sections';
import { FREE_TEXT_FIELDS } from './constants';

export default function PatientObservations() {
  const t = useScopedI18n('translations.pages.patient.form.pages.observations');

  return (
    <PageDescription title={t('title')}>
      {FREE_TEXT_FIELDS.map((x) => (
        <FormText key={x} name={`freeText.${x}`} isTextArea label={t(x)} />
      ))}

      <FormText name='freeText.other' isTextArea label={t('others')} />
    </PageDescription>
  );
}
