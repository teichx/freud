import { Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { FormText } from '~/components/Form';
import { Section } from '~/components/Section';

import { FIRST_CONSULT_FIELDS } from './constants';

const COLUMN_WIDTH = ['100%', '100%', '100%', '32%', '32%', '32%'];

export const FirstConsult = () => {
  const { t } = useTranslation(undefined, {
    keyPrefix: 'pages.patient.create.first_consult',
  });

  return (
    <Section label={t('title')}>
      <Flex alignItems='stretch' flexWrap='wrap' justifyContent='space-between'>
        {FIRST_CONSULT_FIELDS.map((x) => (
          <FormText key={x} isTextArea w={COLUMN_WIDTH} name={x} label={t(x)} />
        ))}
      </Flex>
    </Section>
  );
};

export default FirstConsult;
