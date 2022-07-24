import {ApolloClient, gql, InMemoryCache} from '@apollo/client';
import {Button, Container, Typography} from '@mui/material';
import {GRAPHQL_URL} from 'constants/graphql';
import type {NextPage} from 'next';
import {useCallback, useState} from 'react';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: GRAPHQL_URL,
});

const query = gql`
  {
    totalUsers
    totalPhotos
  }
`;

type Query = {
  totalUsers: number;
  totalPhotos: number;
};

const Page: NextPage = () => {
  const [data, setData] = useState<Query>({totalUsers: 0, totalPhotos: 0});

  const getData = useCallback(() => {
    client.query<Query>({query}).then(result => setData(result.data));
  }, []);

  return (
    <Container maxWidth="xl" sx={{py: 1}}>
      <Button variant="contained" onClick={getData} sx={{mb: 1}}>
        get
      </Button>
      <Typography>Total users: {data.totalUsers}</Typography>
      <Typography>Total photos: {data.totalPhotos}</Typography>
    </Container>
  );
};

export default Page;
