import { TDocumentDefinitions } from 'pdfmake/interfaces';

import { getSynchronousI18n } from '../notification/email/content/i18n';
import { styles as defaultStyles } from './styles';

export type GenerateMetadataProps = Pick<
  TDocumentDefinitions,
  'userPassword' | 'ownerPassword'
> &
  Pick<
    NonNullable<TDocumentDefinitions['info']>,
    'title' | 'subject' | 'keywords'
  > & {
    styles?: TDocumentDefinitions['styles'];
    t: ReturnType<typeof getSynchronousI18n>;
  };

export const generateMetadata = ({
  t,
  userPassword,
  ownerPassword,
  title,
  subject,
  keywords,
  styles,
}: GenerateMetadataProps): Omit<TDocumentDefinitions, 'content'> => ({
  compress: true,
  userPassword,
  ownerPassword,
  permissions: {
    copying: true,
    modifying: false,
  },
  info: {
    title,
    subject,
    keywords,
    author: t('document.metadata.author'),
    creator: t('document.metadata.author'),
    producer: t('document.metadata.author'),
  },
  defaultStyle: {
    font: 'Helvetica',
    lineHeight: 1,
    fontSize: 12,
  },
  styles: {
    ...defaultStyles,
    ...styles,
  },
});
