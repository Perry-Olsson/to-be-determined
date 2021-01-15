import React from "react";
import { ApolloProvider } from "@apollo/client";

import createApolloClient from "./src/utils/apolloClient";
import Main from "./src/Main";
import GalaxyBackground from "./src/components/GalaxyBackground";
import AuthStorage from "./src/utils/AuthStorage";
import AuthStorageProvider from "./src/contexts/AuthStorageContext";

export const authStorage = new AuthStorage();

const App = () => {
  const client = createApolloClient(authStorage);

  return (
    <ApolloProvider client={client}>
      <AuthStorageProvider value={authStorage}>
        <GalaxyBackground>
          <Main />
        </GalaxyBackground>
      </AuthStorageProvider>
    </ApolloProvider>
  );
};

export default App;
