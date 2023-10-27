import { Flex } from '@chakra-ui/react';

import { FormText } from '~/common/components/Form';
import { Section } from '~/common/components/Section';
import { useScopedI18n } from '~/i18n/client';

import { FIRST_CONSULT_FIELDS } from './constants';

const COLUMN_WIDTH = ['100%', '100%', '100%', '32%', '32%', '32%'];

export const FirstConsult = () => {
  const t = useScopedI18n('translations.pages.patient.create.firstConsult');

  return (
    <Section label={t('title')}>
      <Flex alignItems='stretch' flexWrap='wrap' justifyContent='space-between'>
        {FIRST_CONSULT_FIELDS.map((x) => (
          <FormText
            key={x}
            isTextArea
            w={COLUMN_WIDTH}
            name={`firstConsult.${x}`}
            label={t(x)}
          />
        ))}
      </Flex>
    </Section>
  );
};

export default FirstConsult;
