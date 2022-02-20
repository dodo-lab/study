import {CircularProgress} from '@mui/material';
import React from 'react';
import {useIsFetching} from 'react-query';

const GlobalLoadingIndicator: React.FC = () => {
  const isFetching = useIsFetching();

  if (!isFetching) {
    return null;
  }

  return <CircularProgress sx={{position: 'absolute', top: 10, right: 10}} size={24} />;
};

export default GlobalLoadingIndicator;
