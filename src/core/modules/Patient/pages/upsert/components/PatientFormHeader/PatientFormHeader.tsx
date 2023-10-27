import { Button, ButtonGroup, Flex } from '@chakra-ui/react';
import { FiPrinter, FiArchive, FiShare2 } from 'react-icons/fi';

import { Buttons } from '~/common/components/Buttons';
import { FormSaveButton } from '~/common/components/Form';
import { Section } from '~/common/components/Section';

import { StickHeader } from './styles';

export const PatientFormHeader = () => (
  <StickHeader>
    <Section disabledLoading my='0'>
      <Flex justifyContent='flex-end'>
        <ButtonGroup spacing='4' variant='solid'>
          <Buttons.Back />

          <Button leftIcon={<FiPrinter />} hidden>
            words.print
          </Button>

          <Button leftIcon={<FiShare2 />} hidden>
            words.share
          </Button>

          <Button leftIcon={<FiArchive />} hidden>
            words.archive
          </Button>

          <FormSaveButton />
        </ButtonGroup>
      </Flex>
    </Section>
  </StickHeader>
);
