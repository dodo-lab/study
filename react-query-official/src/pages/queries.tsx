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

  return (
    <Container maxWidth="xl">
      <Typography variant="h2">Queries</Typography>
      <QueryResult title="hello" result={hello} />
      <QueryResult title="error400" result={error400} />
    </Container>
  );
};

export default Queries;
