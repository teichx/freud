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
import {
  HiOutlineArchiveBoxArrowDown,
  HiOutlineArchiveBoxXMark,
} from 'react-icons/hi2';

import { Routes } from '~/core/constants';
import { useFormat } from '~/core/hooks';

import { PatientCaseReportUpsertModal } from '../../../../CaseReport/modal/upsert';
import { useHandleArchive } from '../../hooks';
import { PatientActionsProps } from './types';

export const PatientActions: FC<PatientActionsProps> = ({
  patientId,
  patientName,
  isArchived,
}) => {
  const { archivePatient, unarchivePatient } = useHandleArchive();
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
          <PatientCaseReportUpsertModal
            patient={{ id: patientId, name: patientName }}
          >
            <Text>{t('createCaseReport')}</Text>
          </PatientCaseReportUpsertModal>
        </MenuItem>

        <MenuItem
          as={Link}
          href={formatRoute(Routes.Core.Patient.CaseReport.List, patientId)}
        >
          <HStack>
            <Text>{t('seeCaseReport')}</Text>
          </HStack>
        </MenuItem>

        <MenuDivider />

        <MenuItem
          onClick={() => {
            (isArchived ? unarchivePatient : archivePatient)({ patientId });
          }}
        >
          <HStack>
            <Icon
              as={
                isArchived
                  ? HiOutlineArchiveBoxXMark
                  : HiOutlineArchiveBoxArrowDown
              }
            />

            <Text>{t(isArchived ? 'unarchivePatient' : 'archivePatient')}</Text>
          </HStack>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
