import { SimpleGrid } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { FormText } from '~/components/Form';
import { Section } from '~/components/Section';

import { COMPLAINED_HISTORY_FIELDS } from './constants';

export const ComplainedHistory = () => {
  const { t } = useTranslation(undefined, {
    keyPrefix: 'pages.patient.create.complained_history',
  });

  return (
    <Section label={t('title')}>
      <SimpleGrid columns={[1, 1, 2, 4]} columnGap='4'>
        {COMPLAINED_HISTORY_FIELDS.map((columnName) => (
          <FormText
            key={columnName}
            isTextArea
            name={columnName}
            label={t(columnName)}
          />
        ))}
      </SimpleGrid>
    </Section>
  );
};

export default ComplainedHistory;
