import {Stack, Typography} from '@mui/material';
import React from 'react';

export type UserProps = {
  githubLogin: string;
  name: string;
  avatar: string | null;
};

export const User: React.FC<UserProps> = ({name, avatar}) => {
  return (
    <Stack sx={{borderBottom: 1, alignItems: 'center', p: 1, gap: 1}} direction="row">
      {avatar && <img src={avatar} width={48} height={48} alt={name} />}
      <Typography>{name}</Typography>
    </Stack>
  );
};
