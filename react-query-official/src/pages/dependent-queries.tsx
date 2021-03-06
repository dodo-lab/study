import {Container, Typography} from '@mui/material';
import {useGetFaker} from 'backend/api';
import QueryResult from 'components/QueryResult';
import React from 'react';

const ParallelQueries: React.FC = () => {
  const user1 = useGetFaker(2000, 'user1');
  const user2 = useGetFaker(2000, 'user2', {
    enabled: user1.isSuccess,
  });

  return (
    <Container maxWidth="xl">
      <Typography variant="h2">Dependent Queries</Typography>

      <QueryResult title="user1" result={user1} filters={['data']} />
      <QueryResult title="user2" result={user2} filters={['data']} />
    </Container>
  );
};

export default ParallelQueries;
