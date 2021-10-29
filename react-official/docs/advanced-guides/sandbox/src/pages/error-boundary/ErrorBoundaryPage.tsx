import React, { useReducer } from 'react';
import ErrorBoundary from './parts/ErrorBoundary';

const ForcedError = () => {
  throw new Error('unknown error');
};

const ErrorBoundaryPage: React.FC = () => {
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
};

export default ErrorBoundaryPage;
