import React from "react";
import { createClient, Provider } from "urql";

import Main from "./src/Main";
import GalaxyBackground from "./src/components/GalaxyBackground";

const App = () => {
  const client = createClient({
    url: "http://localhost:4000/graphql",
  });

  return (
    <Provider value={client}>
      <GalaxyBackground>
        <Main />
      </GalaxyBackground>
    </Provider>
  );
};

export default App;
