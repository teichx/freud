'use client';

import { Flex } from '@chakra-ui/react';

import { FormText } from '~/common/components';
import { useScopedI18n } from '~/i18n/client';

import { PageDescription } from '../../_sections';

export default function PatientContact() {
  const t = useScopedI18n('translations.pages.patient.form.pages.contact');

  return (
    <PageDescription title={t('title')}>
      <Flex
        justifyContent='flex-start'
        columnGap='4'
        flexDirection={['column', 'column', 'row']}
      >
        <Flex w={['100%', '100%', '100%', 200]}>
          <FormText
            name='phoneNumber'
            label={t('phoneNumber')}
            mask={{
              mask: [
                { mask: '(00) 0000-0000', lazy: false },
                { mask: '(00) 0 0000-0000' },
              ],
            }}
          />
        </Flex>

        <Flex w={['100%', '100%', '100%', 400]}>
          <FormText name='email' label={t('email')} />
        </Flex>
      </Flex>

      <FormText name='address' label={t('address')} />
      <FormText name='emergency' label={t('emergency')} isTextArea />
    </PageDescription>
  );
}
