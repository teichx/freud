import { SimpleGrid } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { FormText } from '~/components/FormText';
import { Section } from '~/components/Section';

const COLUMNS = [
  'problem_initiation',
  'frequency_and_intensity',
  'previous_treatments',
  'medication',
];

export const ComplainedHistory = () => {
  const { t } = useTranslation(undefined, {
    keyPrefix: 'pages.patient.create.complained_history',
  });

  return (
    <Section label={t('title')}>
      <SimpleGrid columns={[1, 1, 2, 4]} columnGap='4'>
        {COLUMNS.map((columnName) => (
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
