import { FC, PropsWithChildren } from 'react';

import { Box, HStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { SaveButton } from '~/common/components/Buttons';
import { DataModal } from '~/common/components/DataModal';
import { FormComponent, FormHidden, FormText } from '~/common/components/Form';
import { FormComponentProps } from '~/common/components/Form/FormComponent/types';

import { CaseReportFormProps, PatientCaseReportProps } from './types';

export const PatientCaseReport: FC<
  PropsWithChildren<PatientCaseReportProps>
> = ({ children, patientName, caseReport }) => {
  const { t } = useTranslation();

  const handleSubmit = ({
    caseReport: caseReportUpdated,
  }: CaseReportFormProps) => console.log({ ...caseReportUpdated });

  const createOrUpdateKey = caseReport.id ? 'update' : 'create';

  return (
    <DataModal<FormComponentProps<CaseReportFormProps>>
      buttonTrigger={children}
      wrapper={FormComponent}
      wrapperProps={{
        onSubmit: handleSubmit,
        initialValues: {
          caseReport: {
            reportingDate: new Date().toISOString().split('T')[0],
            id: '',
            content: '',
            ...caseReport,
          },
        },
      }}
      modalProps={{
        closeOnOverlayClick: false,
      }}
      title={t(`pages.patient.caseReport.${createOrUpdateKey}.title`)}
      footerComponents={<SaveButton />}
    >
      <Box>
        <FormHidden name='caseReport.patientId' />
        <FormHidden name='caseReport.id' defaultValue={caseReport.id} />

        <HStack justifyContent='flex-start' columnGap={4}>
          <FormText
            w='250px'
            isRequired
            name='caseReport.reportingDate'
            label={t('pages.patient.caseReport.reportingDate')}
            inputProps={{
              type: 'date',
            }}
          />

          <FormText
            isDisabled
            isReadOnly
            name='patientName'
            label={t('pages.patient.caseReport.patientName')}
            inputProps={{ defaultValue: patientName }}
          />
        </HStack>

        <FormText
          isTextArea
          isRequired
          name='caseReport.content'
          label={t('pages.patient.caseReport.content')}
          inputProps={{ h: '200px' }}
        />
      </Box>
    </DataModal>
  );
};
