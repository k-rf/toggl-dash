import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import fetch from "cross-fetch";

const httpLink = new HttpLink({
  uri: `${import.meta.env.VITE_API_URL}/graphql`,
  fetch,
});

export const apolloClient = new ApolloClient({ link: httpLink, cache: new InMemoryCache() });
