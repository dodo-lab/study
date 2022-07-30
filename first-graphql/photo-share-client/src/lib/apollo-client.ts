import {ApolloClient, ApolloLink, concat, HttpLink, InMemoryCache} from '@apollo/client';
import {persistCache} from 'apollo3-cache-persist';
import {GRAPHQL_URL} from 'constants/graphql';

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

const cache = new InMemoryCache();

export const client = new ApolloClient({
  cache,
  link: concat(authMiddleware, httpLink),
});

export function initializeCache() {
  persistCache({
    cache,
    storage: localStorage,
  });

  const apolloCachePersist = localStorage.getItem('apollo-cache-persist');
  if (apolloCachePersist !== null) {
    cache.restore(JSON.parse(apolloCachePersist));
  }
}
