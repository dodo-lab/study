import {gql} from '@apollo/client';
import {Query} from '@apollo/client/react/components';
import {Button, Container, Stack, Typography} from '@mui/material';
import {User, UserProps} from 'components/User';
import type {NextPage} from 'next';

const query = gql`
  query allUsers {
    totalUsers
    allUsers {
      githubLogin
      name
      avatar
    }
  }
`;

type QueryType = {
  totalUsers: number;
  allUsers: UserProps[];
};

const Page: NextPage = () => {
  return (
    <Container maxWidth="xl" sx={{py: 1}}>
      <Query<QueryType> query={query}>
        {({data, loading, refetch}) =>
          loading ? (
            <Typography>loading users...</Typography>
          ) : (
            <>
              <Stack direction="row" sx={{gap: 1, alignItems: 'center'}}>
                <Typography>{data?.totalUsers} Users</Typography>
                <Button variant="contained" onClick={() => refetch()}>
                  Refetch Users
                </Button>
              </Stack>
              <Stack>
                {data?.allUsers.map(user => (
                  <User key={user.name} {...user} />
                ))}
              </Stack>
            </>
          )
        }
      </Query>
    </Container>
  );
};

export default Page;
