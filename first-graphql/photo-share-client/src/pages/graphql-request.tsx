import {Box, Button, Container, Stack, Typography} from '@mui/material';
import {GRAPHQL_URL} from 'constants/graphql';
import request from 'graphql-request';
import type {NextPage} from 'next';
import {useCallback, useState} from 'react';

const query = `
  query listUsers {
    allUsers {
      name
      avatar
    }
  }
`;

const mutation = `
  mutation populate($count: Int!) {
    addFakeUsers(count: $count) {
      githubLogin
      name
    }
  }
`;

type User = {
  name: string;
  avatar: string | null;
};

const Page: NextPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = useCallback(() => {
    request(GRAPHQL_URL, query).then(data => setUsers(data.allUsers));
  }, []);

  const populate = useCallback(() => {
    const params = {count: 1};
    request(GRAPHQL_URL, mutation, params).then(_ => getUsers());
  }, [getUsers]);

  return (
    <Container maxWidth="xl">
      <Box sx={{mt: 1}}>
        <Stack direction="row" sx={{mb: 1, gap: 1}}>
          <Button variant="contained" onClick={getUsers}>
            get users
          </Button>
          <Button variant="contained" onClick={populate}>
            populate
          </Button>
        </Stack>
        {users.map((user, index) => (
          <Box key={index} sx={{borderBottom: 1}}>
            <Typography>{user.name}</Typography>
            {user.avatar && <Typography>{user.avatar}</Typography>}
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Page;
