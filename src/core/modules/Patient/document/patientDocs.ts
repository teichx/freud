import { parseISO, format } from 'date-fns';
import { TDocumentDefinitions } from 'pdfmake/interfaces';

import { DynamoItemProps } from '~/common/database/dynamo/types';
import { generateFooter, generateMetadata } from '~/common/document';
import {
  getSynchronousI18n,
  getSynchronousScopedI18n,
} from '~/i18n/synchronous';
import { LocaleKeys } from '~/i18n/types';

import { PatientFields } from '../api/schema/types';
import {
  COGNITIVE_FIELDS,
  COMPLAINED_HISTORY_FIELDS,
  FIRST_CONSULT_FIELDS,
  FREE_TEXT_FIELDS,
} from '../pages/upsert/components/PatientForm/constants';

export type GetPatientDocumentProps = {
  patient: DynamoItemProps<PatientFields>;
  language: LocaleKeys;
  documentId: string;
};

const personalFields = [
  'gender',
  'profession',
  'cpf',
  'rg',
  'address',
  'phoneNumber',
  'emergency',
] as const;

const formatKeyValue = (
  key: string,
  value: string | undefined
): [TDocumentDefinitions['content'], TDocumentDefinitions['content']] => [
  { text: key, bold: true, style: 'content' },
  { text: value || '', style: 'content' },
];

const getTitle = (text: string): TDocumentDefinitions['content'] => ({
  text: text,
  style: 'header',
});

const getTable = (
  body: TDocumentDefinitions['content'][][]
): TDocumentDefinitions['content'] => ({
  table: {
    headerRows: 0,
    widths: ['30%', '*'],
    body: body,
  },
});

export const getPatientDocument = ({
  patient,
  language,
  documentId,
}: GetPatientDocumentProps): TDocumentDefinitions => {
  const t = getSynchronousScopedI18n(
    language,
    'translations.pages.patient.create'
  );
  const tGeneral = getSynchronousI18n(language);
  const tDocs = getSynchronousScopedI18n(language, 'document');

  const yesOrNo = (condition: boolean | undefined) =>
    condition ? tDocs('yes') : tDocs('no');

  return {
    ...generateMetadata({
      t: tGeneral,
      title: patient.name,
      subject: tDocs('patientFile.subject', { name: patient.name }),
    }),
    content: [
      { text: tDocs('patientFile.title'), style: 'title' },

      getTitle(t('personal.title')),
      getTable([
        [
          { text: tDocs('id'), bold: true, style: 'content' },
          { text: patient.id, style: 'content' },
        ],
        [
          { text: t('personal.name'), bold: true, style: 'content' },
          { text: patient.name, style: 'content' },
        ],
        [
          { text: t('personal.birth'), bold: true, style: 'content' },
          {
            text: patient.personal.birth
              ? format(
                  parseISO(patient.personal.birth),
                  tGeneral('common.date')
                )
              : '',
            style: 'content',
          },
        ],
        ...personalFields.map((field) =>
          formatKeyValue(t(`personal.${field}`), patient.personal[field])
        ),
        formatKeyValue(
          t('personal.marriageStatus'),
          patient.personal.marriageStatus
            ? tGeneral(
                `translations.options.marriageStatus.${patient.personal.marriageStatus}`
              )
            : ''
        ),
        formatKeyValue(
          t('personal.schooling'),
          patient.personal.schooling
            ? tGeneral(
                `translations.options.schooling.${patient.personal.schooling}`
              )
            : ''
        ),
      ]),

      getTitle(t('firstConsult.title')),
      getTable([
        ...FIRST_CONSULT_FIELDS.map((field) =>
          formatKeyValue(
            t(`firstConsult.${field}`),
            patient.firstConsult[field]
          )
        ),
      ]),

      getTitle(t('complainedHistory.title')),
      getTable([
        ...COMPLAINED_HISTORY_FIELDS.map((field) =>
          formatKeyValue(
            t(`complainedHistory.${field}`),
            patient.history[field]
          )
        ),
      ]),

      getTitle(t('complainedCheck.cognitive.title')),
      getTable([
        ...COGNITIVE_FIELDS.cognitive.map((field) =>
          formatKeyValue(
            t(`complainedCheck.cognitive.${field}`),
            yesOrNo(patient.symptoms.cognitive?.includes(field))
          )
        ),
        formatKeyValue(
          t('complainedCheck.cognitive.other'),
          patient.symptoms.cognitiveDetails
        ),
      ]),

      getTitle(t('complainedCheck.emotional.title')),
      getTable([
        ...COGNITIVE_FIELDS.emotional.map((field) =>
          formatKeyValue(
            t(`complainedCheck.emotional.${field}`),
            yesOrNo(patient.symptoms.emotional?.includes(field))
          )
        ),
        formatKeyValue(
          t('complainedCheck.emotional.other'),
          patient.symptoms.emotionalDetails
        ),
      ]),

      getTitle(t('freeText.title')),
      getTable([
        ...FREE_TEXT_FIELDS.map((field) =>
          formatKeyValue(t(`freeText.${field}`), patient.freeText[field])
        ),
      ]),

      generateFooter({ t: tGeneral, documentId }),
    ],
  };
};
