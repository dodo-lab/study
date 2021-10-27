import React, { useReducer } from 'react';
import ErrorBoundary from './components/ErrorBoundary';

const ForcedError = () => {
  throw new Error('unknown error');
};

function App() {
  const [forcedError, dispatchForcedError] = useReducer(
    (forcedError) => !forcedError,
    false
  );

  return (
    <ErrorBoundary>
      <h1>No Error</h1>
      <button onClick={dispatchForcedError}>Error</button>
      {forcedError && <ForcedError />}
    </ErrorBoundary>
  );
}

export default App;
