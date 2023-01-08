import { FC, useCallback, useEffect, useState } from 'react';

import { GoogleLoginProps } from './types';

export const GoogleLogin: FC<GoogleLoginProps> = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const handleCallbackResponse = useCallback(
    (event: Record<string, string>) => {
      console.log({ event });
    },
    []
  );

  useEffect(() => {
    if (!domLoaded) return;

    const clientId = process.env.NEXT_PUBLIC_GOOGLE_AUTHENTICATE_CLIENT_ID;
    if (!clientId) return;

    const elementParent = document.getElementById('signInDiv');
    if (!elementParent) return;
    if (typeof google === 'undefined') return;

    google.accounts.id.initialize({
      client_id: clientId,
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(elementParent, {
      theme: 'outline',
      size: 'large',
    });
  }, [domLoaded, handleCallbackResponse]);

  return domLoaded ? <div id='signInDiv' /> : null;
};
