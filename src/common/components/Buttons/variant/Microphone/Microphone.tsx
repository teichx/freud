import { FC } from 'react';

import { Box, Icon } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { BiMicrophone, BiMicrophoneOff } from 'react-icons/bi';

import { TooltipComponent } from '~/common/components/TooltipComponent';

import { IconButtonStyled } from './style';
import { MicrophoneProps } from './types';

export const Microphone: FC<MicrophoneProps> = ({ isListening, onClick }) => {
  const { t } = useTranslation(undefined, {
    keyPrefix: 'components.microphone',
  });

  return (
    <Box position='relative'>
      <TooltipComponent label={t(isListening ? 'toDisable' : 'toEnable')}>
        <IconButtonStyled
          onClick={onClick}
          data-ripple={isListening}
          aria-label={isListening ? 'stop listening' : 'start listening'}
        >
          <Icon as={isListening ? BiMicrophoneOff : BiMicrophone} />
        </IconButtonStyled>
      </TooltipComponent>
    </Box>
  );
};
