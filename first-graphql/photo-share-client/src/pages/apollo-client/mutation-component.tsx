import {gql} from '@apollo/client';
import {Mutation} from '@apollo/client/react/components';
import {Box, Button, Container, Stack, Typography} from '@mui/material';
import type {NextPage} from 'next';
import {useState} from 'react';

const mutation = gql`
  mutation addFakeUsers($count: Int!) {
    addFakeUsers(count: $count) {
      githubLogin
      name
      avatar
    }
  }
`;

type User = {
  githubLogin: string;
  name: string;
  avatar?: string | null;
};

type MutationResType = {
  addFakeUsers: User[];
};

const Page: NextPage = () => {
  const [user, setUser] = useState<User>();

  return (
    <Container maxWidth="xl" sx={{py: 1}}>
      <Mutation<MutationResType> mutation={mutation} variables={{count: 1}}>
        {addFakeUsers => (
          <Button
            variant="contained"
            onClick={async () => {
              const res = await addFakeUsers();
              setUser(res.data?.addFakeUsers[0]);
            }}>
            Add Fake Users
          </Button>
        )}
      </Mutation>
      {user && (
        <Box sx={{mt: 2}}>
          <Typography>Fake user successfully added</Typography>
          <Stack sx={{borderBottom: 1, alignItems: 'center', p: 1, gap: 1}} direction="row">
            {user.avatar && <img src={user.avatar} width={48} height={48} alt={user.name} />}
            <Typography>{user.name}</Typography>
          </Stack>
        </Box>
      )}
    </Container>
  );
};

export default Page;
