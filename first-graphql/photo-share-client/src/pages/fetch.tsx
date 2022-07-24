import {Button, Container, Typography} from '@mui/material';
import {GRAPHQL_URL} from 'constants/graphql';
import type {NextPage} from 'next';
import {useCallback, useState} from 'react';

const query = '{totalPhotos, totalUsers}';

type Data = {
  totalPhotos: number;
  totalUsers: number;
};

const Page: NextPage = () => {
  const [data, setData] = useState<Data>({totalPhotos: 0, totalUsers: 0});

  const getData = useCallback(() => {
    fetch(GRAPHQL_URL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({query}),
    })
      .then(res => res.json())
      .then(({data}: {data: Data}) => {
        setData(data);
      });
  }, []);

  return (
    <Container maxWidth="xl">
      <Button variant="contained" onClick={getData}>
        get
      </Button>
      <Typography>Total photos: {data.totalPhotos}</Typography>
      <Typography>Total users: {data.totalUsers}</Typography>
    </Container>
  );
};

export default Page;
