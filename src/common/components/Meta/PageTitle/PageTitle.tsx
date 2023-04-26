import { FC } from 'react';

import Head from 'next/head';

import { PageTitleProps } from './types';

export const PageTitle: FC<PageTitleProps> = ({ title }) => (
  <Head>
    <title>{title}</title>
    <meta property='og:title' content={title} key='title' />
  </Head>
);
