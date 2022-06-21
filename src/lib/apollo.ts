import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4olfd8c0fri01xkdor8a7ii/master",
  cache: new InMemoryCache(),
});
