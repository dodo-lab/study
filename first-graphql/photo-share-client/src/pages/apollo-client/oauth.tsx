import {Button, Container, Typography} from '@mui/material';
import type {NextPage} from 'next';
import {useCallback, useEffect, useState} from 'react';

const Page: NextPage = () => {
  const [code, setCode] = useState('');

  useEffect(() => {
    if (window.location.search.match(/code=/)) {
      const code = window.location.search.replace('?code=', '');
      setCode(code);
    }
  }, []);

  const requestCode = useCallback(() => {
    const clientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID ?? '';
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=user`;
  }, []);

  return (
    <Container maxWidth="xl" sx={{py: 1}}>
      <Button variant="contained" onClick={requestCode}>
        Sign in with GitHub
      </Button>
      <Typography>code : {code}</Typography>
    </Container>
  );
};

export default Page;
