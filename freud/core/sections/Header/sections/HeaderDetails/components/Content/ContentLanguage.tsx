import { FC } from 'react';

import {
  Divider,
  HStack,
  Icon,
  IconButton,
  PopoverBody,
  PopoverContent,
  Text,
} from '@chakra-ui/react';
import { FiCheck, FiChevronLeft } from 'react-icons/fi';

import { HeaderButton } from '../../../../components/HeaderButton';
import { HeaderDetailsContentProps } from './types';

const ptBR = {
  title: 'Selecione seu idioma',
  languages: {
    ptBR: 'Português',
    enUS: 'English (US)',
  },
} as const;

let currentLanguage = 'ptBR';

const useLanguage = () => ({
  currentLanguage,
  toLanguage: (language: string) => (currentLanguage = language),
});

export const ContentLanguage: FC<HeaderDetailsContentProps> = ({
  toContent,
}) => {
  const { currentLanguage, toLanguage } = useLanguage();

  return (
    <PopoverContent mx={4} mb={0}>
      <PopoverBody>
        <HStack>
          <IconButton
            aria-label='back'
            borderRadius='full'
            onClick={() => toContent('default')}
          >
            <Icon as={FiChevronLeft} />
          </IconButton>

          <Text>{ptBR.title}</Text>
        </HStack>
      </PopoverBody>

      <Divider />

      <PopoverBody px='0'>
        {Object.entries(ptBR.languages).map(([langName, langTranslate]) => (
          <HeaderButton
            key={langName}
            onClick={() => {
              toLanguage(langName);
              setTimeout(() => toContent('default'), 200);
            }}
            leftIcon={
              <Icon
                ml='0.5'
                as={FiCheck}
                visibility={currentLanguage === langName ? 'visible' : 'hidden'}
              />
            }
          >
            {langTranslate}
          </HeaderButton>
        ))}
      </PopoverBody>
    </PopoverContent>
  );
};
