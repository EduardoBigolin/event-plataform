import { ApolloClient, InMemoryCache } from "@apollo/client";
export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4u3tlee0ic601uo4n3o1ltt/master",
  cache: new InMemoryCache(),
});
