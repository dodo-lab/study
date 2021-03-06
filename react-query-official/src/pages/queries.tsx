import {Button, Container, Typography} from '@mui/material';
import axios from 'axios';
import {useError400} from 'backend/api';
import QueryResult from 'components/QueryResult';
import React from 'react';
import {useQuery, useQueryClient} from 'react-query';

const Queries: React.FC = () => {
  const queryClient = useQueryClient();
  const hello = useQuery('hello', async () => {
    return (await axios.get('/api/hello')).data;
  });
  const error400 = useError400('400');
  const timeout = useQuery('timeout', async () => {
    return await axios.get('/api/timeout', {timeout: 5000});
  });

  return (
    <Container maxWidth="xl">
      <Typography variant="h2">Queries</Typography>
      <QueryResult title="hello" result={hello} />
      <QueryResult title="error400" result={error400} />
      <QueryResult title="timeout" result={timeout} />
      <Button variant="contained" onClick={() => queryClient.cancelQueries('timeout')}>
        CANCEL TIMEOUT
      </Button>
      <Button sx={{ml: 2}} variant="contained" onClick={() => queryClient.cancelQueries()}>
        CANCEL ALL
      </Button>
    </Container>
  );
};

export default Queries;
