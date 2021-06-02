import React, { useState } from "react";
import { ApolloProvider } from "@apollo/client";

import createApolloClient from "./src/utils/apolloClient";
import Main from "./src/Main";
import GalaxyBackground from "./src/components/GalaxyBackground";
import AuthStorage from "./src/utils/AuthStorage";
import AuthStorageProvider from "./src/contexts/AuthStorageContext";
import { LoadingProvider } from "./src/contexts/LoadingIcon";

export const authStorage = new AuthStorage();

const App = () => {
  const client = createApolloClient(authStorage);
  const [launching, setLaunching] = useState(true);

  return (
    <ApolloProvider client={client}>
      <AuthStorageProvider value={authStorage}>
        <LoadingProvider>
          <GalaxyBackground />
          <Main launching={launching} setLaunching={setLaunching} />
        </LoadingProvider>
      </AuthStorageProvider>
    </ApolloProvider>
  );
};

export default App;
