import { INITIAL_QUERY_PAGINATION, REPLACE_OPTIONS } from './constants';
import { ReplaceRouterProps, RouterProps } from './types';

export const splitPath = ({ router: { asPath } }: RouterProps) => {
  const [baseUrl, parameters] = asPath.split('?');

  return {
    baseUrl,
    parameters: new URLSearchParams(parameters || ''),
  };
};

export const replaceRoute = ({ page, limit, router }: ReplaceRouterProps) => {
  const { baseUrl, parameters } = splitPath({ router });

  if (page) parameters.set('page', page.toString());
  if (limit) parameters.set('limit', limit.toString());

  const newRoute = {
    pathname: baseUrl,
    search: parameters.toString(),
  };

  router.replace(newRoute, undefined, REPLACE_OPTIONS);
};

export const getPage = ({ router }: RouterProps) => {
  const { parameters } = splitPath({ router });

  const pageRawNumber = Number(parameters.get('page'));
  const page = Number.isInteger(pageRawNumber)
    ? pageRawNumber
    : INITIAL_QUERY_PAGINATION.page;

  return page;
};
