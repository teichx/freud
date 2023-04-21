import { Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { FormText } from '~/components/FormText';
import { Section } from '~/components/Section';

const COLUMN_WIDTH = ['100%', '100%', '100%', '32%', '32%', '32%'];

export const FirstConsult = () => {
  const { t } = useTranslation(undefined, {
    keyPrefix: 'pages.patient.create.first_consult',
  });

  return (
    <Section label={t('title')}>
      <Flex alignItems='stretch' flexWrap='wrap' justifyContent='space-between'>
        <FormText
          isTextArea
          w={COLUMN_WIDTH}
          name='principal_reason'
          label={t('principal_reason')}
        />
        <FormText
          isTextArea
          w={COLUMN_WIDTH}
          name='appearance_and_behavior'
          label={t('appearance_and_behavior')}
        />
        <FormText
          isTextArea
          w={COLUMN_WIDTH}
          name='demand_assessment'
          label={t('demand_assessment')}
        />
      </Flex>
    </Section>
  );
};

export default FirstConsult;
