import {Container, Divider, FormControlLabel, Pagination, Switch, Typography} from '@mui/material';
import {useGetFaker} from 'backend/api';
import QueryResult from 'components/QueryResult';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';

type FormInput = {
  keepPreviousData: boolean;
};

const KeepPreviousData: React.FC = () => {
  const [page, setPage] = useState(1);
  const {register, watch} = useForm<FormInput>({defaultValues: {keepPreviousData: true}});
  const faker = useGetFaker(1000, ['keep-previous-data', page], {
    keepPreviousData: watch('keepPreviousData'),
    cacheTime: 0,
  });

  return (
    <Container maxWidth="xl">
      <Typography variant="h2">Keep Previous Data</Typography>
      <QueryResult title="faker" result={faker} filters={['isLoading', 'isFetching', 'isPreviousData', 'data']} />
      <Pagination count={100} page={page} onChange={(_, nextPage) => setPage(nextPage)} />
      <Divider />
      <FormControlLabel
        label="keepPreviousData"
        labelPlacement="start"
        control={<Switch {...register('keepPreviousData')} checked={watch('keepPreviousData')} />}
      />
    </Container>
  );
};

export default KeepPreviousData;
