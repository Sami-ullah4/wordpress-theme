// lib/apollo-client.js
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// ✅ Use absolute URL (avoid localhost issues in production)
const httpLink = new HttpLink({
  uri: "http://localhost/wp-headless/server/graphql", // your WPGraphQL endpoint
});

// Optional: setup headers (e.g., auth token later)
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  ssrMode: true, // ✅ Important for server components
});
