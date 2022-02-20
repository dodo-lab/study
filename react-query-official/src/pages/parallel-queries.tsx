import {Container, Typography} from '@mui/material';
import axios from 'axios';
import QueryResult from 'components/QueryResult';
import React from 'react';
import {useQueries} from 'react-query';

const ParallelQueries: React.FC = () => {
  const users = useQueries(
    [...Array(5)].map((_, index) => ({
      queryKey: ['user', index],
      queryFn: async () => (await axios.get('/api/faker')).data,
    })),
  );

  console.log(users);

  return (
    <Container maxWidth="xl">
      <Typography variant="h2">Parallel Queries</Typography>
      {users.map((user, index) => {
        return <QueryResult key={index} title={`user-${index}`} result={user} filter="data" />;
      })}
    </Container>
  );
};

export default ParallelQueries;
