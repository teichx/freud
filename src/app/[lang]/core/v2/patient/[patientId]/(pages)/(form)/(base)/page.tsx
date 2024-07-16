'use client';

import { Button, ButtonGroup, Text, VStack } from '@chakra-ui/react';
import { useField } from 'react-final-form';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { HiOutlineArchiveBoxArrowDown } from 'react-icons/hi2';

import { FormText } from '~/common/components';
import { useScopedI18n } from '~/i18n/client';

import { PageDescription } from '../../../_sections';

const BUTTON_STATUS = [
  {
    name: 'active',
    icon: FaRegCircleCheck,
  },
  {
    name: 'archive',
    icon: HiOutlineArchiveBoxArrowDown,
  },
] as const;

export default function PatientDefault() {
  const t = useScopedI18n('translations.pages.patient.form.pages.principal');
  const { input: archivedAtInput } = useField('archivedAt', {
    subscription: { value: true },
  });
  const isArchived = Boolean(archivedAtInput.value);

  const status = isArchived ? 'archive' : 'active';

  return (
    <PageDescription title={t('title')}>
      <VStack alignItems='flex-start' mb='3'>
        <Text>{t('status.title')}</Text>

        <ButtonGroup isAttached size='sm'>
          {BUTTON_STATUS.map(({ name, icon: Icon }) => {
            const isActive = name === status;
            const labelSuffix = isActive ? name : (`to_${name}` as const);
            return (
              <Button
                key={`${name}-${status}`}
                colorScheme={isActive ? 'green' : 'gray'}
                leftIcon={<Icon />}
              >
                {t(`status.${labelSuffix}`)}
              </Button>
            );
          })}
        </ButtonGroup>
      </VStack>

      <FormText name='name' label={t('name')} isRequired />
    </PageDescription>
  );
}
