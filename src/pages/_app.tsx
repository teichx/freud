import dynamic from 'next/dynamic';

export const App = dynamic(() => import('../core/pages/_app'));
export default App;
