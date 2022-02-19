import {CircularProgress, Divider, Typography} from '@mui/material';
import React from 'react';
import {UseQueryResult} from 'react-query';

type Props = {
  title: string;
  result: UseQueryResult;
};

const QueryResult: React.FC<Props> = ({title, result}) => {
  return (
    <>
      <Divider sx={{mb: 2}} />
      <Typography variant="h5">
        {title}
        {result.isLoading && <CircularProgress size={22} sx={{ml: 2}} />}
      </Typography>
      <Typography component="pre">{JSON.stringify(result, null, 2)}</Typography>
    </>
  );
};

export default QueryResult;
