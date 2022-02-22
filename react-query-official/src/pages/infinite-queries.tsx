import {Button, Container, Divider, Typography} from '@mui/material';
import {useGetFakers} from 'backend/api';
import React from 'react';

const count = 10;
const fetchMax = 3;

const InfiniteQueries: React.FC = () => {
  const {data, fetchNextPage, hasNextPage, isFetchingNextPage} = useGetFakers(1000, count, 'infinite-query', {
    getNextPageParam: (lastPage, pages) => (pages.length < fetchMax ? pages.length * count : undefined),
    cacheTime: 0,
  });

  return (
    <Container maxWidth="xl">
      <Typography variant="h2">Infinite Queries</Typography>
      {data &&
        data.pages.map((fakers, index) => (
          <React.Fragment key={index}>
            {fakers.map(faker => (
              <React.Fragment key={faker.name}>
                <Divider sx={{mb: 2}} />
                <Typography>index: {faker.index}</Typography>
                <Typography>name: {faker.name}</Typography>
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      <Button
        variant="contained"
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
        sx={{mt: 2}}>
        Next Fetch
      </Button>
    </Container>
  );
};

export default InfiniteQueries;
