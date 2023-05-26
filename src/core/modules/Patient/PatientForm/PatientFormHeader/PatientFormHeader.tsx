import { Button, ButtonGroup, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { FiPrinter, FiArchive, FiShare2 } from 'react-icons/fi';

import { FormSaveButton } from '~/common/components/Form';
import { Section } from '~/common/components/Section';

export const PatientFormHeader = () => {
  const { t } = useTranslation();
  const { back } = useRouter();

  return (
    <Section disabledLoading>
      <Flex justifyContent='flex-end'>
        <ButtonGroup spacing='4' variant='solid'>
          <Button onClick={back} variant='outline'>
            {t('words.back')}
          </Button>

          <Button leftIcon={<FiPrinter />} hidden>
            {t('words.print')}
          </Button>

          <Button leftIcon={<FiShare2 />} hidden>
            {t('words.share')}
          </Button>

          <Button leftIcon={<FiArchive />} hidden>
            {t('words.archive')}
          </Button>

          <FormSaveButton />
        </ButtonGroup>
      </Flex>
    </Section>
  );
};
