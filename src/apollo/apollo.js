import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://ecommerce-endpoint.onrender.com',
  cache: new InMemoryCache()
});
