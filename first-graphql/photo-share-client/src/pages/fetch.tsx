import {Button, Container, Typography} from '@mui/material';
import type {NextPage} from 'next';
import {useCallback, useState} from 'react';

const query = '{totalPhotos, totalUsers}';
const url = 'http://localhost:4000/graphql';

type Data = {
  totalPhotos: number;
  totalUsers: number;
};

const Page: NextPage = () => {
  const [data, setData] = useState<Data>({totalPhotos: 0, totalUsers: 0});

  const getData = useCallback(() => {
    fetch(url, {
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
