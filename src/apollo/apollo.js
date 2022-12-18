import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://junior-react-endpoint-production.up.railway.app/',
  cache: new InMemoryCache()
});
