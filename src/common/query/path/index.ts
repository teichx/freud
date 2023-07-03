import { NextRouter } from 'next/router';

export const splitPath = ({ asPath }: NextRouter) => {
  const [baseUrl, parameters] = asPath.split('?');
  const isFinal = baseUrl.indexOf('[') == -1;

  return {
    baseUrl,
    isFinal,
    parameters: new URLSearchParams(parameters || ''),
  };
};
