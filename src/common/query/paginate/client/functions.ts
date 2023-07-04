import { REPLACE_OPTIONS } from '../../constants';
import { splitPath } from '../../path';
import { INITIAL_QUERY_PAGINATION } from '../constants';
import { ReplaceRouterProps, RouterProps } from './types';

export const replaceRoute = ({ page, limit, router }: ReplaceRouterProps) => {
  const { isFinal, baseUrl, parameters } = splitPath(router);
  if (!isFinal) return;

  if (page) parameters.set('page', page.toString());
  if (limit) parameters.set('limit', limit.toString());

  const newRoute = {
    pathname: baseUrl,
    search: parameters.toString(),
  };

  router.replace(newRoute, undefined, REPLACE_OPTIONS);
};

export const getPage = ({ router }: RouterProps) => {
  const { parameters } = splitPath(router);

  const pageRawNumber = Number(parameters.get('page'));
  const page = Number.isInteger(pageRawNumber)
    ? pageRawNumber
    : INITIAL_QUERY_PAGINATION.page;

  return page;
};
