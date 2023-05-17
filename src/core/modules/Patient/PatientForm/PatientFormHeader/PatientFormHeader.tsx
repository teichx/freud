import { Button, ButtonGroup, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { FiSave, FiPrinter, FiArchive, FiShare2 } from 'react-icons/fi';

import { Section } from '~/common/components/Section';
import { Routes } from '~/core/constants';
import { useLoader } from '~/core/services';

export const PatientFormHeader = () => {
  const { isLoading } = useLoader();
  const { t } = useTranslation();
  const { push } = useRouter();

  return (
    <Section disabledLoading>
      <Flex justifyContent='flex-end'>
        <ButtonGroup spacing='4' variant='solid'>
          <Button
            onClick={() => push(Routes.Core.Patient.List)}
            variant='outline'
          >
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

          <Button
            type='submit'
            color='white'
            isLoading={isLoading}
            leftIcon={<FiSave />}
            colorScheme='book.desertSun'
          >
            {t('words.save')}
          </Button>
        </ButtonGroup>
      </Flex>
    </Section>
  );
};
