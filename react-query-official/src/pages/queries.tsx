import {Container, Typography} from '@mui/material';
import axios from 'axios';
import QueryResult from 'components/QueryResult';
import React from 'react';
import {useQuery} from 'react-query';

const Queries: React.FC = () => {
  const hello = useQuery('hello', async () => {
    return (await axios.get('/api/hello')).data;
  });
  const error400 = useQuery('400', async () => {
    return await axios.get('/api/400');
  });
  const timeout = useQuery('timeout', async () => {
    return await axios.get('/api/timeout', {timeout: 5000});
  });

  return (
    <Container maxWidth="xl">
      <Typography variant="h2">Queries</Typography>
      <QueryResult title="hello" result={hello} />
      <QueryResult title="error400" result={error400} />
      <QueryResult title="timeout" result={timeout} />
    </Container>
  );
};

export default Queries;
