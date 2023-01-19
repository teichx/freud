import { useRouter } from 'next/router';

import { AppPage } from '~/template/app/AppPage';

export const EditProfile = () => {
  const { query } = useRouter();

  return <AppPage>{JSON.stringify(query)}</AppPage>;
};

export default EditProfile;
