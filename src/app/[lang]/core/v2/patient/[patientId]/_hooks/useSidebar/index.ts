import { useParams, usePathname } from 'next/navigation';
import { FiUser } from 'react-icons/fi';
import { TbReportAnalytics } from 'react-icons/tb';

import { useScopedI18n } from '~/i18n/client';

import { mapIsActive } from './functions';
import { SidebarItemProps, UseSidebar } from './types';

export const useSidebar: UseSidebar = () => {
  const pathname = usePathname();
  const { patientId } = useParams<{ patientId: string }>();
  const t = useScopedI18n('translations.pages.patient.form.pages');

  const items: SidebarItemProps[] = mapIsActive(pathname, [
    {
      label: t('principal.title'),
      href: `/core/v2/patient/${patientId}`,
      Icon: FiUser,
      items: [
        {
          label: t('personal.title'),
          href: `/core/v2/patient/${patientId}/personal`,
        },
        {
          label: t('contact.title'),
          href: `/core/v2/patient/${patientId}/contact`,
        },
        {
          label: t('complained.title'),
          href: `/core/v2/patient/${patientId}/complained`,
        },
        {
          label: t('firstConsult.title'),
          href: `/core/v2/patient/${patientId}/consult`,
        },
        {
          label: t('observations.title'),
          href: `/core/v2/patient/${patientId}/observations`,
        },
      ],
    },
    {
      label: t('caseReport.title'),
      Icon: TbReportAnalytics,
      href: `/core/v2/patient/${patientId}/case-report`,
    },
  ]);

  return {
    items,
  };
};
