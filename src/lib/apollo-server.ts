import { HttpLink } from '@apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';
import {
  ApolloClient,
  InMemoryCache,
} from '@apollo/client/core';

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: 'https://graphql-pokemon2.vercel.app/',
    }),
    defaultOptions: {
      query: {
        fetchPolicy: 'cache-first',
      },
    },
    ssrMode: typeof window === 'undefined',
  });
});
