import {Button, Container, FormControlLabel, Radio, RadioGroup, Typography} from '@mui/material';
import {useGetFaker, usePostFaker} from 'backend/api';
import QueryResult from 'components/QueryResult';
import React, {useState} from 'react';
import {useQueryClient} from 'react-query';

const GET_KEY = 'mutations-get-faker';
const POST_KEY = 'mutations-post-faker';

const SELECTIONS = ['setQueryData', 'invalidateQueries'] as const;
type Selections = typeof SELECTIONS[number];

const Mutations: React.FC = () => {
  const [select, setSelect] = useState<Selections>(SELECTIONS[0]);
  const queryClient = useQueryClient();
  const getFaker = useGetFaker(1000, GET_KEY);
  const postFaker = usePostFaker(POST_KEY, {
    onSuccess: data => {
      console.log('success');
      switch (select) {
        case 'setQueryData':
          queryClient.setQueryData(GET_KEY, data);
          break;
        case 'invalidateQueries':
          queryClient.invalidateQueries(GET_KEY);
          break;
      }
    },
    onSettled: () => console.log('settled'),
  });

  return (
    <Container maxWidth="xl">
      <Typography variant="h2">Mutations</Typography>
      <QueryResult title="get" result={getFaker} />
      <RadioGroup value={select} onChange={e => setSelect(e.target.value as Selections)}>
        {SELECTIONS.map(radio => (
          <FormControlLabel key={radio} label={radio} value={radio} control={<Radio />} />
        ))}
      </RadioGroup>
      <Button variant="contained" onClick={() => postFaker.mutate()}>
        mutate
      </Button>
    </Container>
  );
};

export default Mutations;
