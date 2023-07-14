import { FC, MouseEventHandler, useCallback } from 'react';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { BreadcrumbStyledItem, BreadcrumbWrapper } from './styles';
import { BreadcrumbProps } from './types';

export const Breadcrumb: FC<BreadcrumbProps> = ({ items }) => {
  const { t } = useTranslation();

  const stopOnClick = useCallback<MouseEventHandler<HTMLAnchorElement>>(
    (event) => {
      event.preventDefault();
      event.stopPropagation();
    },
    []
  );

  return (
    <BreadcrumbWrapper>
      {items.map(({ href, text, textKey }, index) => (
        <BreadcrumbStyledItem
          key={`${href}-${text}-${textKey}`}
          isLastChild={items.length - 1 === index}
          isCurrentPage={items.length - 1 === index}
        >
          <Link
            passHref
            href={href}
            onClick={items.length - 1 === index ? stopOnClick : undefined}
          >
            <span>{text || t(textKey || '')}</span>
          </Link>
        </BreadcrumbStyledItem>
      ))}
    </BreadcrumbWrapper>
  );
};
