import { NextRouter } from 'next/router';

import { INITIAL_QUERY_PAGINATION } from './constants';

export const getUrlParams = ({ asPath, pathname }: NextRouter) => {
  const parameters = asPath.replace(pathname, '');

  return new URLSearchParams(parameters);
};

export const getPage = (urlParams: URLSearchParams) => {
  const pageRawNumber = Number(urlParams.get('page'));
  const page = Number.isInteger(pageRawNumber)
    ? pageRawNumber
    : INITIAL_QUERY_PAGINATION.page;

  return page;
};
