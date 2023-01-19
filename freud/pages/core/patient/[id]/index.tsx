import { useRouter } from 'next/router';

import { AppPage } from '~/core/template/AppPage';

export const EditProfile = () => {
  const { query } = useRouter();

  return <AppPage>{JSON.stringify(query)}</AppPage>;
};

export default EditProfile;
