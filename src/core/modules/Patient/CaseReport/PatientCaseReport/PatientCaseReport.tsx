import { FC, PropsWithChildren } from 'react';

import { Box, HStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { DataModal } from '~/common/components/DataModal';
import {
  FormComponent,
  FormHidden,
  FormText,
  FormSaveButton,
} from '~/common/components/Form';
import { FormComponentProps } from '~/common/components/Form/FormComponent/types';
import { Loader } from '~/common/components/Loader';
import { ReadOnlyText } from '~/common/components/ReadOnlyText';
import { useLoader } from '~/core/services';

import { useGetCaseReport, useSaveCaseReports } from '../hooks';
import { CaseReportContent } from './CaseReportContent';
import { CaseReportFormProps, PatientCaseReportProps } from './types';

export const PatientCaseReport: FC<
  PropsWithChildren<PatientCaseReportProps>
> = ({ children, caseReportId, patient }) => {
  const { t } = useTranslation(undefined, {
    keyPrefix: 'pages.patient.caseReport',
  });
  const { caseReport, getById, reset } = useGetCaseReport({
    patientId: patient.id,
  });
  const { isLoading } = useLoader(
    'GetPatientCaseReport',
    'SavePatientCaseReport'
  );
  const { saveCaseReport } = useSaveCaseReports({
    patientId: patient.id,
    successCallback: ({ id }) => getById({ caseReportId: id }),
  });

  const handleOpen = () => getById({ caseReportId });

  const createOrUpdateKey =
    caseReportId || caseReport?.id ? 'update' : 'create';

  return (
    <DataModal<FormComponentProps<CaseReportFormProps>>
      buttonTrigger={children}
      wrapper={FormComponent}
      wrapperProps={{
        onSubmit: saveCaseReport,
        initialValues: caseReport,
      }}
      modalProps={{
        closeOnOverlayClick: false,
      }}
      disclosureProps={{ onOpen: handleOpen, onClose: reset }}
      title={t(`${createOrUpdateKey}.title`)}
      buttonWrapperProps={{
        justifyContent: 'center',
      }}
      footerComponents={<FormSaveButton />}
    >
      <Box>
        <Loader isLoading={isLoading} />
        <FormHidden name='patientId' defaultValue={patient?.id} />
        <FormHidden name='id' defaultValue={caseReportId} />

        <HStack justifyContent='flex-start' columnGap={4}>
          <FormText
            w='250px'
            isRequired
            name='reportingDate'
            label={t('reportingDate')}
            inputProps={{
              type: 'date',
            }}
          />

          <ReadOnlyText
            isRequired
            value={patient.name}
            label={t('patientName')}
          />
        </HStack>

        <CaseReportContent />
      </Box>
    </DataModal>
  );
};
