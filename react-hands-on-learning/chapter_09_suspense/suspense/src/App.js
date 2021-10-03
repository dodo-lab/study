import React, { useState, Suspense, lazy } from 'react';
import Agreement from './components/Agreement';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import ClipLoader from 'react-spinners/ClipLoader';
import Status from './components/Status';

// Mainコンポーネント初回描画時にimportする
const Main = lazy(() => import('./Main'));

function App() {
  const [agree, setAgree] = useState(false);

  if (!agree) return <Agreement onAgree={() => setAgree(true)} />;

  return (
    <>
      <Suspense fallback={<ClipLoader />}>
        <Status />
      </Suspense>
      <Suspense fallback={<ClimbingBoxLoader />}>
        <Main />
      </Suspense>
    </>
  );
}

export default App;
