import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import fetch from "cross-fetch";

const httpLink = new HttpLink({
  uri: "/api",
  fetch,
});

export const apolloClient = new ApolloClient({ link: httpLink, cache: new InMemoryCache() });
