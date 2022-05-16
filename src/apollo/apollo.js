import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://sauchuk-scandiweb-test.herokuapp.com/',
  cache: new InMemoryCache()
});
