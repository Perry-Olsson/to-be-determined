import ApolloLinkTimeout from "apollo-link-timeout";
import { createHttpLink, InMemoryCache, ApolloClient } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Constants from "expo-constants";

const createApolloClient = authStorage => {
  const timeoutLink = new ApolloLinkTimeout(10000);

  const httpLink = createHttpLink({
    uri: Constants.manifest.extra.apolloURI,
  });

  const timeoutHttpLink = timeoutLink.concat(httpLink);

  const authLink = setContext(async (_, { headers }) => {
    const token = await authStorage.getAccessToken();

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  return new ApolloClient({
    link: authLink.concat(timeoutHttpLink),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
