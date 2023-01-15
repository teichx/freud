import { useEffect } from 'react';

export const Authenticated = (props: unknown) => {
  console.log({ props });
  useEffect(() => {
    // window.close();
  }, []);

  return null;
};

export default Authenticated;
