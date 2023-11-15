import { TDocumentDefinitions } from 'pdfmake/interfaces';

import { getSynchronousI18n } from '../notification/email/content/i18n';

export type GenerateFooterProps = {
  t: ReturnType<typeof getSynchronousI18n>;
  documentId?: string;
};

export const generateFooter = ({
  t,
  documentId,
}: GenerateFooterProps): TDocumentDefinitions['content'] => [
  {
    stack: [
      documentId
        ? [
            {
              text: t('document.footer.documentId', {
                documentId: documentId.replace(
                  /(\w{5})(\w{5})(\w{4})(\w{4})(\w{4})(\w{4})/,
                  '$1-$2-$3-$4-$5-$6'
                ),
              }),
              marginBottom: 4,
            },
          ]
        : [],
      {
        text: t('document.footer.emittedAt', {
          emittedAt: new Date().toISOString(),
        }),
      },
    ],
    marginTop: 24,
    alignment: 'right',
  },
];
