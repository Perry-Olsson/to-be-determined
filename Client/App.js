import React from "react";
import { createClient, Provider } from "urql";

import Main from "./src/Main";
import GalaxyBackground from "./src/components/GalaxyBackground";
import AuthStorage from "./src/utils/AuthStorage";
import AuthStorageProvider from "./src/contexts/AuthStorageContext";

const authStorage = new AuthStorage();

const App = () => {
  const client = createClient({
    url: "http://localhost:4000/graphql",
  });

  return (
    <Provider value={client}>
      <AuthStorageProvider value={authStorage}>
        <GalaxyBackground>
          <Main />
        </GalaxyBackground>
      </AuthStorageProvider>
    </Provider>
  );
};

export default App;
