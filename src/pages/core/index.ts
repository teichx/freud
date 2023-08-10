import { Routes } from '~/core/constants';

export default function App() {
  return null;
}

export const getServerSideProps = () => ({
  redirect: {
    permanent: false,
    destination: Routes.Core.Patient.List,
  },
});
