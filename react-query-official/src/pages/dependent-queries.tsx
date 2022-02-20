import {Container, Typography} from '@mui/material';
import {useFaker} from 'backend/api';
import QueryResult from 'components/QueryResult';
import React from 'react';

const ParallelQueries: React.FC = () => {
  const user1 = useFaker(2000, 'user1');
  const user2 = useFaker(2000, 'user2', {
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
