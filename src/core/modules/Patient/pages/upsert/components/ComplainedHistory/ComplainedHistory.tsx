import { SimpleGrid } from '@chakra-ui/react';

import { FormText } from '~/common/components/Form';
import { Section } from '~/common/components/Section';
import { useScopedI18n } from '~/i18n/client';

import { COMPLAINED_HISTORY_FIELDS } from './constants';

export const ComplainedHistory = () => {
  const t = useScopedI18n(
    'translations.pages.patient.create.complainedHistory'
  );

  return (
    <Section label={t('title')}>
      <SimpleGrid columns={[1, 1, 2, 4]} columnGap='4'>
        {COMPLAINED_HISTORY_FIELDS.map((columnName) => (
          <FormText
            key={columnName}
            isTextArea
            name={`history.${columnName}`}
            label={t(columnName)}
          />
        ))}
      </SimpleGrid>
    </Section>
  );
};

export default ComplainedHistory;
