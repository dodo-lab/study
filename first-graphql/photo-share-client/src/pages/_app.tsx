import {ApolloClient, ApolloLink, ApolloProvider, concat, HttpLink, InMemoryCache} from '@apollo/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Box, createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import {LinkItem, SideBar} from 'components/SideBar';
import {GRAPHQL_URL} from 'constants/graphql';
import type {AppProps} from 'next/app';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1800,
    },
  },
});

const linkItems: LinkItem[] = [
  {name: 'Top', link: '/'},
  {name: 'Fetch', link: '/fetch'},
  {name: 'Graphql Request', link: '/graphql-request'},
  {name: 'Apollo Client', link: '/apollo-client/apollo-client'},
  {name: 'Apollo Client - Query Component', link: '/apollo-client/query-component'},
  {name: 'Apollo Client - Mutation Component', link: '/apollo-client/mutation-component'},
  {name: 'Apollo Client - OAuth', link: '/apollo-client/oauth'},
];

const httpLink = new HttpLink({uri: GRAPHQL_URL});

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('token');
  if (token !== null) {
    operation.setContext(({headers = {}}) => ({
      headers: {
        ...headers,
        Authorization: token,
      },
    }));
  }

  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{display: 'flex'}}>
        <SideBar linkItems={linkItems} />
        <Box component="main" sx={{flexGrow: 1, height: '100vh'}}>
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default MyApp;
