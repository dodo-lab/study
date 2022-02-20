import {CircularProgress, Divider, Typography} from '@mui/material';
import React from 'react';
import {UseQueryResult} from 'react-query';

type UseQueryResultKey = keyof UseQueryResult<any, unknown>;

type Props = {
  title: string;
  result: UseQueryResult<any, unknown>;
  filters?: UseQueryResultKey[];
};

const QueryResult: React.FC<Props> = ({title, result, filters}) => {
  const showResult = filters
    ? filters.reduce<Record<string, any>>((prev, current) => {
        prev[current] = result[current];
        return prev;
      }, {})
    : result;

  return (
    <>
      <Divider sx={{mb: 2}} />
      <Typography variant="h5">
        {title}
        {result.isFetching && <CircularProgress size={22} sx={{ml: 2}} />}
      </Typography>
      <Typography component="pre">{JSON.stringify(showResult, null, 2)}</Typography>
    </>
  );
};

export default QueryResult;
