import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://junior-react-endpoint-omega.vercel.app/',
  cache: new InMemoryCache()
});
