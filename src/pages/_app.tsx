import dynamic from 'next/dynamic';

export const App = dynamic(() => import('../common/pages/_app'));
export default App;
