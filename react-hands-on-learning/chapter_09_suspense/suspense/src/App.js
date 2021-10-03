import React, { useState, Suspense, lazy } from 'react';
import Agreement from './components/Agreement';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';

// Mainコンポーネント初回描画時にimportする
const Main = lazy(() => import('./Main'));

function App() {
  const [agree, setAgree] = useState(false);

  if (!agree) return <Agreement onAgree={() => setAgree(true)} />;

  return (
    <Suspense fallback={ClimbingBoxLoader}>
      <Main />
    </Suspense>
  );
}

export default App;
