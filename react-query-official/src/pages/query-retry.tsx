import {Container, Typography} from '@mui/material';
import {useError400} from 'backend/api';
import QueryResult from 'components/QueryResult';
import React from 'react';

const QueryRetry: React.FC = () => {
  const noRetry = useError400('no-retry', {retry: false});
  const retry = useError400('retry');
  const retry5 = useError400('retry-6', {retry: 5});
  const retryCustom = useError400('retry-custom', {retry: (failureCount, error) => failureCount <= 7});
  const retryInfinity = useError400('retry-infinity', {retry: true});

  return (
    <Container maxWidth="xl">
      <Typography variant="h2">Query Retry</Typography>
      <QueryResult title="no retry" result={noRetry} filters={['failureCount', 'isFetching']} />
      <QueryResult title="retry" result={retry} filters={['failureCount', 'isFetching']} />
      <QueryResult title="retry 5th" result={retry5} filters={['failureCount', 'isFetching']} />
      <QueryResult title="retry custom" result={retryCustom} filters={['failureCount', 'isFetching']} />
      <QueryResult title="retry infinity" result={retryInfinity} filters={['failureCount', 'isFetching']} />
    </Container>
  );
};

export default QueryRetry;
