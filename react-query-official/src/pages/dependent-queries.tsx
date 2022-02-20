import {Container, Typography} from '@mui/material';
import axios from 'axios';
import QueryResult from 'components/QueryResult';
import React from 'react';
import {useQuery} from 'react-query';

const ParallelQueries: React.FC = () => {
  const user1 = useQuery('user1', async () => (await axios.get('/api/faker', {params: {delay: 2000}})).data);
  const user2 = useQuery('user2', async () => (await axios.get('/api/faker', {params: {delay: 2000}})).data, {
    enabled: user1.isSuccess,
  });

  return (
    <Container maxWidth="xl">
      <Typography variant="h2">Dependent Queries</Typography>

      <QueryResult title="user1" result={user1} filter="data" />
      <QueryResult title="user2" result={user2} filter="data" />
    </Container>
  );
};

export default ParallelQueries;
