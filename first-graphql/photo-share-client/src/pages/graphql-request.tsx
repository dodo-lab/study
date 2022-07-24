import {Box, Button, Container, Typography} from '@mui/material';
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

type User = {
  name: string;
  avatar: string | null;
};

const Page: NextPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  const getData = useCallback(() => {
    request(GRAPHQL_URL, query).then(data => setUsers(data.allUsers));
  }, []);

  return (
    <Container maxWidth="xl">
      <Button variant="contained" onClick={getData}>
        get
      </Button>
      {users.map((user, index) => (
        <Box key={index} sx={{borderBottom: 1}}>
          <Typography>{user.name}</Typography>
          {user.avatar && <Typography>{user.avatar}</Typography>}
        </Box>
      ))}
    </Container>
  );
};

export default Page;
