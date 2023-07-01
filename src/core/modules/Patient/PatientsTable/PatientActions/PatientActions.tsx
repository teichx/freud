import { FC } from 'react';

import { ChevronDownIcon, EditIcon } from '@chakra-ui/icons';
import {
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { Routes } from '~/core/constants';
import { useFormat } from '~/core/hooks';

import { PatientCaseReport } from '../../CaseReport/PatientCaseReport';
import { PatientActionsProps } from './types';

export const PatientActions: FC<PatientActionsProps> = ({
  patientId,
  patientName,
}) => {
  const { formatRoute } = useFormat();
  const { t } = useTranslation(undefined, {
    keyPrefix: 'pages.patient.list.actions',
  });

  return (
    <Menu>
      <MenuButton px={3} py='2' borderRadius='md' borderWidth='1px'>
        <HStack>
          <Text size='md'>{t('button')}</Text>
          <Icon as={ChevronDownIcon} />
        </HStack>
      </MenuButton>

      <MenuList>
        <MenuItem
          as={Link}
          href={formatRoute(Routes.Core.Patient.Edit, patientId)}
        >
          <HStack>
            <Icon as={EditIcon} />
            <Text>{t('updatePatient')}</Text>
          </HStack>
        </MenuItem>

        <MenuDivider />

        <MenuItem>
          <PatientCaseReport patient={{ id: patientId, name: patientName }}>
            <Text>{t('createCaseReport')}</Text>
          </PatientCaseReport>
        </MenuItem>

        <MenuItem
          as={Link}
          href={formatRoute(Routes.Core.Patient.CaseReport.List, patientId)}
        >
          <HStack>
            <Text>{t('seeCaseReport')}</Text>
          </HStack>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
