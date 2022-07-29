import {gql, useMutation} from '@apollo/client';
import {Button, Container, Typography} from '@mui/material';
import type {NextPage} from 'next';
import {useCallback, useEffect, useRef} from 'react';

const GITHUB_AUTH_MUTATION = gql`
  mutation githubAuth($code: String!) {
    githubAuth(code: $code) {
      token
    }
  }
`;

type GithubAuth = {
  githubAuth: {
    token: string;
  };
};

const Page: NextPage = () => {
  const authorized = useRef(false);
  const [githubAuth, {data}] = useMutation<GithubAuth>(GITHUB_AUTH_MUTATION);

  useEffect(() => {
    if (!authorized.current && window.location.search.match(/code=/)) {
      authorized.current = true;
      const code = window.location.search.replace('?code=', '');
      githubAuth({
        variables: {code},
        update: (_, result) => {
          if (result.data) {
            localStorage.setItem('token', result.data.githubAuth.token);
          }
        },
      });
    }
  }, [githubAuth]);

  const requestCode = useCallback(() => {
    const clientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID ?? '';
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=user`;
  }, []);

  return (
    <Container maxWidth="xl" sx={{py: 1}}>
      <Button variant="contained" onClick={requestCode}>
        Sign in with GitHub
      </Button>
      {data && <Typography>token : ${data.githubAuth.token}</Typography>}
    </Container>
  );
};

export default Page;
