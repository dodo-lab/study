import {CircularProgress, Divider, Typography} from '@mui/material';
import React from 'react';
import {UseQueryResult} from 'react-query';

type Props = {
  title: string;
  result: UseQueryResult<any, unknown>;
  filters?: (keyof UseQueryResult<any, unknown>)[];
};

const QueryResult: React.FC<Props> = ({title, result, filters}) => {
  return (
    <>
      <Divider sx={{mb: 2}} />
      <Typography variant="h5">
        {title}
        {result.isLoading && <CircularProgress size={22} sx={{ml: 2}} />}
      </Typography>
      {filters ? (
        filters.map(filter => (
          <Typography key={filter} component="pre">
            {JSON.stringify(result[filter], null, 2)}
          </Typography>
        ))
      ) : (
        <Typography component="pre">{JSON.stringify(result, null, 2)}</Typography>
      )}
    </>
  );
};

export default QueryResult;
