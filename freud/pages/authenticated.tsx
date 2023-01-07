import { useEffect } from 'react';

import Router, { useRouter } from 'next/router';

export const Authenticate = () => {
  const { query } = useRouter();

  useEffect(() => {
    const { code } = query;
    if (!code) return;

    fetch(`/api/authenticate?code=${code}`)
      .then(async (response) => {
        const token = await response.json();
        console.log({ token });
        Router.push('/dashboard');
      })
      .catch((err) => {
        console.log({ err });
      });
  }, [query]);

  return null;
};

export default Authenticate;
