import {gql, useApolloClient, useMutation, useQuery} from '@apollo/client';
import {Button, Container, Stack} from '@mui/material';
import {User, UserProps} from 'components/User';
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

const ME_QUERY = gql`
  query me {
    me {
      githubLogin
      name
      avatar
    }
  }
`;

type Me = {
  me: UserProps | null;
};

const Page: NextPage = () => {
  const authorized = useRef(false);
  const client = useApolloClient();
  const [githubAuth] = useMutation<GithubAuth>(GITHUB_AUTH_MUTATION);
  const {data: me, refetch: refetchMe} = useQuery<Me>(ME_QUERY);

  useEffect(() => {
    if (!authorized.current && window.location.search.match(/code=/)) {
      authorized.current = true;
      const code = window.location.search.replace('?code=', '');
      githubAuth({
        variables: {code},
        update: (_, result) => {
          if (result.data) {
            localStorage.setItem('token', result.data.githubAuth.token);
            refetchMe();
          }
        },
      });
    }
  }, [githubAuth, refetchMe]);

  const requestCode = useCallback(() => {
    const clientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID ?? '';
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=user`;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('token');
    client.cache.writeQuery({query: ME_QUERY, data: {me: null}});
  }, [client.cache]);

  return (
    <Container maxWidth="xl" sx={{py: 1}}>
      <Stack direction="row" sx={{gap: 1}}>
        <Button variant="contained" onClick={requestCode}>
          Sign in with GitHub
        </Button>
        <Button variant="contained" onClick={logout}>
          logout
        </Button>
      </Stack>
      {me?.me && <User {...me.me} />}
    </Container>
  );
};

export default Page;
