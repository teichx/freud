import dynamic from 'next/dynamic';

export const AppPage = dynamic(() =>
  import('./AppPage').then((x) => x.AppPage)
);
