import { Button, ButtonGroup, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { FiPrinter, FiArchive, FiShare2 } from 'react-icons/fi';

import { FormSaveButton } from '~/common/components/Form';
import { Section } from '~/common/components/Section';
import { useScopedI18n } from '~/i18n/client';

import { StickHeader } from './styles';

export const PatientFormHeader = () => {
  const t = useScopedI18n('translations');
  const router = useRouter();

  return (
    <StickHeader>
      <Section disabledLoading my='0'>
        <Flex justifyContent='flex-end'>
          <ButtonGroup spacing='4' variant='solid'>
            <Button onClick={() => router.back()} variant='outline'>
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
    </StickHeader>
  );
};
