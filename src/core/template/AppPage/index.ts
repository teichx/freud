import dynamic from 'next/dynamic';
export * from './types';

export const AppPage = dynamic(() =>
  import('./AppPage').then((x) => x.AppPage)
);
