import { Box, Flex, SkeletonCircle } from '@chakra-ui/react';
import { Card, CardBody } from '@chakra-ui/react';
import { FormSpy } from 'react-final-form';

import { Avatar } from '~/common/components/Avatar';
import { FormText } from '~/common/components/Form';
import { useLoader } from '~/core/services';
import { useScopedI18n } from '~/i18n/client';

import { ProfileFields } from '../types';
import { BadgeVerified } from './BadgeVerified';

const imageSize = 180;

export const Sidebar = () => {
  const t = useScopedI18n('translations.pages.profile.myData');
  const { isLoading } = useLoader('Profile');

  return (
    <Card w='100%'>
      <CardBody>
        <Box w={imageSize} mx='auto' mb='5'>
          {isLoading ? (
            <SkeletonCircle w={imageSize} h={imageSize} />
          ) : (
            <FormSpy<ProfileFields | undefined>
              render={({ values }) => (
                <Avatar
                  name={values?.user.name}
                  w={imageSize}
                  h={imageSize}
                  alt={values?.user.name || ''}
                  src={(values?.user.image || '').replace('=s96-c', '')}
                />
              )}
            />
          )}
        </Box>

        <Box w='auto'>
          <FormText name='user.name' label={t('name')} />

          <FormText
            name='user.email'
            label={
              <Flex alignItems='center' justifyContent='space-between'>
                {t('email')}

                <FormSpy<ProfileFields | undefined>
                  render={({ values, dirtyFields }) => (
                    <BadgeVerified
                      verified={values?.user?.emailVerified}
                      visible={
                        !!values?.user?.email && !dirtyFields['user.email']
                      }
                    />
                  )}
                />
              </Flex>
            }
            inputProps={{
              isReadOnly: true,
              isDisabled: true,
            }}
          />

          <FormText
            name='personal.phone'
            label={
              <Flex alignItems='center' justifyContent='space-between'>
                {t('phone')}

                <FormSpy<ProfileFields | undefined>
                  render={({ values, dirtyFields }) => (
                    <BadgeVerified
                      verified={values?.personal?.phoneVerified}
                      visible={
                        !!(values?.personal?.phone || '').replaceAll(
                          /\D/g,
                          ''
                        ) && !dirtyFields['personal.phone']
                      }
                    />
                  )}
                />
              </Flex>
            }
            mask={{
              mask: [
                { mask: '(00) 0000-0000', lazy: false },
                { mask: '(00) 0 0000-0000' },
              ],
            }}
          />
        </Box>
      </CardBody>
    </Card>
  );
};
