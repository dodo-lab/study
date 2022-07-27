import {gql} from '@apollo/client';
import {Mutation} from '@apollo/client/react/components';
import {Box, Button, Container, Typography} from '@mui/material';
import {User, UserProps} from 'components/User';
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

type MutationResType = {
  addFakeUsers: UserProps[];
};

const Page: NextPage = () => {
  const [user, setUser] = useState<UserProps>();

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
          <User {...user} />
        </Box>
      )}
    </Container>
  );
};

export default Page;
